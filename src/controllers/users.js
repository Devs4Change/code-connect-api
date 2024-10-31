import { UserModel } from '../models/users.js';
import { registerUserValidator, loginUserValidator, updateUserValidator } from '../validators/users.js'; //Importing validators
import bcrypt from 'bcryptjs'; //Importing bcrypt for password hashing    
import jwt from 'jsonwebtoken'; //Importing jwt for token generation
import { sendTokenEmail } from '../utils/emailService.js'; //Importing email service

// Register user
export const registerUser = async (req, res, next) => {
    try {
        // Validate request body
        const { error, value } = registerUserValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        };
        // Check if user already exists
        const existingUser = await UserModel.findOne({ email: value.email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        };

        // Hash password
        const hashedPassword = bcrypt.hashSync(value.password, 10);

        // Create new user
        await UserModel.create({ ...value, password: hashedPassword });

        // Respond with success message
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        next(error);
    }
};

// Login User
export const loginUser = async (req, res, next) => {
    try {
        // Validate request body
        const { error, value } = loginUserValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        };

        // Check if user exists
        const user = await UserModel.findOne({ email: value.email });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        };

        // Check if password is correct
        const isPasswordValid = await bcrypt.compare(value.password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        };

        // Generate JWT token
        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        // Send token via email
        await sendTokenEmail(user.email, token);

        // Respond with success message
        res.status(200).json({ message: "Login successful. Token has been sent to your email." });
    } catch (error) {
        next(error);
    }
}

// Get user profile
export const getUserProfile = async (req, res, next) => {
    try {
        // Find authenticated user from database
        const user = await UserModel
            .findById(req.auth.id)
            .select({ password: false });
        // Respond to request with user profile
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

// Update user profile
export const updateUserProfile = async (req, res, next) => {
    try {
        // Validate request body
        const { error, value } = updateUserValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        };

        // Find user by ID and update
        const user = await UserModel.findByIdAndUpdate(
            req.auth.id,
            value,
            { new: true }
        ).select({ password: false });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}
