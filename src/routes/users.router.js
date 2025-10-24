import { Router } from "express";
import * as Controllers from "../controllers/users.controller.js";
import { validateUserData } from "../middlewares/validation.middleware.js";

const router = Router();

router.post("/", validateUserData, Controllers.createUser);

router.get("/", Controllers.getUsers);

router.get("/age/:range", Controllers.getUsersByAge);

router.put("/:id", Controllers.updateUser);

export default router;
