import { expressjwt } from "express-jwt";

export const isAuthenticated = expressjwt({
  secret: process.env.JWT_SECRET_KEY,
  algorithms: ["HS256"],
});

export const isAdmin = (req, res, next) => {
  console.log('Auth payload:', req.auth);
  if (!req.auth || req.auth.role !== 'admin') {
    return res.status(403).json({ message: "Forbidden: Only administrators can perform this action" });
  }
  next();
};