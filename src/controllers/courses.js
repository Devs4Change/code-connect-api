import { CourseModel } from "../models/courses.js";
import { createCourseValidator } from "../validators/courses.js";


export const createCourse = async (req, res, next) => {
    try {
        // Validate user input
        const { error, value } = createCourseValidator.validate({
            ...req.body,
            content: req.file?.filename
        });
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

// Controller for getting all courses
export const getCourses = async (req, res, next) => {
    try {
        const courses = await CourseModel.find();
        return res.status(200).json(courses);
    } catch (error) {
        next(error);
    }
}

// Controller for getting a single course
export const getCourse = async (req, res, next) => {
    try {
        const course = await CourseModel.findById(req.params.id);
        return res.status(200).json(course);
    } catch (error) {
        next(error);
    }
}

// Controller for updating a course
export const updateCourse = async (req, res, next) => {
    try {

    } catch (error) {
        next(error);
    }
}

