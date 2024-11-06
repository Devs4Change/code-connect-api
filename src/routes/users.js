import { Router } from "express";
import { registerUser, loginUser, logoutUser, getUserProfile, updateUserProfile } from "../controllers/users.js";
import { isAuthenticated } from "../middlewares/auth.js";


const usersRouter = Router();

usersRouter.post("/users/register", registerUser);
usersRouter.post("/users/login", loginUser);
usersRouter.post("/users/logout", logoutUser);
usersRouter.get("/users/me", isAuthenticated, getUserProfile);
usersRouter.patch("/users/profile", updateUserProfile);


export default usersRouter;