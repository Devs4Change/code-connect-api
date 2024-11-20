import { Router } from "express";
import { htmlModules, cssModules, javascriptModules } from "../controllers/modules.js";

const modulesRouter = Router();

modulesRouter.get("/modules/html", htmlModules);
modulesRouter.get("/modules/css", cssModules);
modulesRouter.get("/modules/javascript", javascriptModules);

export default modulesRouter;