import { Router } from "express";
import { createCourse, updateCourse, getCourses, getCourse } from "../controllers/courses.js";
import { isAuthenticated, isAdmin } from "../middlewares/auth.js";
import { courseVideoUpload } from "../middlewares/uploads.js";
// Create router
const coursesRouter = Router();

coursesRouter.post("/courses/create", isAuthenticated, isAdmin, courseVideoUpload.single('content'), createCourse);
coursesRouter.get("/courses", getCourses);
coursesRouter.get("/courses/:id", getCourse);
coursesRouter.patch("/courses/:id", isAuthenticated, isAdmin, updateCourse);

export default coursesRouter;
