import { UserModel } from "../models/users.js";
import { createUserValidator, loginUserValidator, updateUserValidator, logoutUserValidator } from "../validators/users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Controller for user registration
export const registerUser = async (req, res, next) => {
    try {
        // Validate the request body against the createUserValidator schema
        const { error, value } = createUserValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }
        // Check if the user already exists
        const existingUser = await UserModel.findOne({ email: value.email });
        if (existingUser) {
            return res.status(409).json("User already exists");
        }
        // Hash the password
        const hashedPassword = bcrypt.hashSync(value.password, 10);
        // Create a new user
        await UserModel.create({ ...value, password: hashedPassword });
        // Send a success response
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        next(error);
    }
};

// Controller for user login
export const loginUser = async (req, res, next) => {
    try {
        // Validate the request body against the loginUserValidator schema
        const { error, value } = loginUserValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }
        // Find the user by email
        const user = await UserModel.findOne({ email: value.email });
        if (!user) {
            return res.status(404).json("User not found");
        }
        // Compare the provided password with the stored hashed password
        const isPasswordMatch = bcrypt.compareSync(value.password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json("Invalid Credentials");
        }
        // Generate a JWT token
        const token = jwt.sign(
            {
                id: user.id,
                role: user.role
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1h" }
        );
        // Send a success response with the token
        res.status(200).json({ message: "Logged in successfully", accessToken: token });
    } catch (error) {
        next(error);
    }
};


// Controller for getting user profile
export const getUserProfile = async (req, res, next) => {
    try {
        // Find authenticated user
        const user = await UserModel
            .findById(req.auth.id)
            .select({ password: false });

        // Send a success response with the user profile
        res.json(user);
    } catch (error) {
        next(error);
    }
};


// Controller for updating user profile
export const updateUserProfile = async (req, res, next) => {
    try {
        // Validate the request body against the updateUserValidator schema
        const { error, value } = updateUserValidator.validate({
            ...req.body,
            avatar: req.file?.filename
        });
        if (error) {
            return res.status(422).json(error);
        }
        // Update the user profile
        await UserModel.findByIdAndUpdate(req.auth.id, value);
        // Send a success response
        res.json({ message: "User profile updated successfully" });
    } catch (error) {
        next(error);
    }
};

// Controller for user logout
export const logoutUser = async (req, res, next) => {
    try {
        res.json({ message: "User logged out successfully" });
    } catch (error) {
        next(error);
    }
};