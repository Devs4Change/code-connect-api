import {UserModel} from '../models/users.js';

// Register user
export const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        // Default to 'user' role if none provided
        const userRole = role || 'user';
        const user = await UserModel.create({ 
            name, 
            email, 
            password,
            role: userRole 
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Login User