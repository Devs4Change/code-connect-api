import { Router } from 'express';
import { registerUser, loginUser, getUserProfile, updateUserProfile } from '../controllers/users.js';
import { isAuthenticated, hasPermission } from '../middlewares/auth.js';

// Creating user router
const userRouter = Router();

// Register user route
userRouter.post('/users/register', registerUser);

// Login user route
userRouter.post('/users/login', loginUser);

// Get user profile route
userRouter.get('/users/profile', isAuthenticated, hasPermission('get_profile'), getUserProfile);

// Update user profile route
userRouter.patch('/users/profile', isAuthenticated, hasPermission('update_profile'), updateUserProfile);

export default userRouter;
