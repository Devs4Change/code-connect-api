import { Router } from "express";
import { enrollCourse } from "../controllers/enroll.js";
import { isAuthenticated } from "../middlewares/auth.js";

const enrollRouter = Router();

enrollRouter.post("/enroll/:id", isAuthenticated, enrollCourse);

export default enrollRouter;