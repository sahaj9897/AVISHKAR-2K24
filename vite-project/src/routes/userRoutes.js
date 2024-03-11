import express from "express";
import { loginController, registerController } from "../Controllers/userCtrl.js";

const router = express.Router();

//LOGIN
router.post("/login", loginController);

//Register
router.post("/register", registerController);

export default router;
