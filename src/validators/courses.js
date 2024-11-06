import Joi from "joi";

export const createCourseValidator = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    content: Joi.string().required(),
});

export const updateCourseValidator = Joi.object({
    title: Joi.string(),
    description: Joi.string(),
    content: Joi.string(),
});
