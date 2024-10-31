import { expressjwt } from 'express-jwt';
import {UserModel} from '../models/users.js';
import { permissions } from '../utils/rbac.js';

export const isAuthenticated = expressjwt({
    secret: process.env.JWT_SECRET_KEY,
    algorithms: ['HS256'],
});

export const hasPermission = (action) => {
    return async (req, res, next) => {
        try {
            // Find authenticated user from database
            const user = await UserModel
            .findById(req.auth.id)
            .populate("role");

            // Check if user has permission to perform the action
            const permission = permissions.find(p => p.role === user.role);
            if (!permission) {
                return res.status(403).json({ message: "Forbidden" });
            }

            // Check if user has the specific action permission
            if(permission.actions.includes(action)) {
                next();
            } else {
                return res.status(403).json({ message: "Forbidden" });
            }
        } catch (error) {
            next(error);
        }
    }
}
