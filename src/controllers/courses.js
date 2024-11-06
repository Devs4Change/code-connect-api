import { CourseModel } from "../models/courses.js";
import { createCourseValidator } from "../validators/courses.js";


export const createCourse = async (req, res, next) => {
    try {
        // Validate user input
        const { error, value } = createCourseValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }
        
        // Create course
        await CourseModel.create(value);
        return res.status(201).json("Course created successfully");
    } catch (error) {
        next(error);
    }
}

export const updateCourse = async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error);
    }
}

