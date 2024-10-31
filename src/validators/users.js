import Joi from 'joi';

// Validator for user registration
export const registerUserValidator = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

// Validator for user login
export const loginUserValidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

// Validator for user update
export const updateUserValidator = Joi.object({
    name: Joi.string(),
    avatar: Joi.string(),
});

