import { userModel } from "../models/users.js";
    
// Controller for user registration
export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    const user = await userModel.create({ name, email, password });
    res.json({ user, message: "User registered successfully" });
};  

// Controller for user login
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    res.json({ message: "User logged in successfully" });
};

// Controller for user logout
export const logoutUser = async (req, res) => {
    res.json({ message: "User logged out successfully" });
};

// Controller for getting user profile
export const getUserProfile = async (req, res) => {
    res.json({ message: "User profile fetched successfully" });
};

// Controller for updating user profile
export const updateUserProfile = async (req, res) => {
    res.json({ message: "User profile updated successfully" });
};
