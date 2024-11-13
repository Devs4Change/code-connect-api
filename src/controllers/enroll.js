import { CourseModel } from "../models/courses.js";
import { UserModel } from "../models/users.js";

export const enrollCourse = async (req, res, next) => {
    try {
        // Find the course and user
        const course = await CourseModel.findById(req.params.id);
        if (!course) {
            return res.status(404).json("Course not found");
        }
        const user = await UserModel.findById(req.auth.id);
        if (!user) {
            return res.status(404).json("User not found");
        }

        // Update the course's enrolledUsers array
        course.enrolledUsers.push(user);
        await course.save();

        // Update the user's enrolledCourses array
        user.enrolledCourses.push(course);
        await user.save();
        return res.status(200).json("Enrollment successful");
    } catch (error) {
        next(error);
    }
}