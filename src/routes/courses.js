import { Router } from "express";
import { createCourse, updateCourse } from "../controllers/courses.js";
import { isAuthenticated, isAdmin } from "../middlewares/auth.js";

// Create router
const coursesRouter = Router();

coursesRouter.post("/courses/create", isAuthenticated, isAdmin, createCourse);
coursesRouter.patch("/courses/:id", isAuthenticated, isAdmin, updateCourse);

export default coursesRouter;
