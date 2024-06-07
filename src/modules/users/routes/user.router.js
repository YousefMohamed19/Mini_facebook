import { Router } from "express";
import { login, logout, signUp } from "../controllers/user.controller.js";

export const userRouter = Router();
userRouter.post('/signup',signUp)
userRouter.post('/login',login)
userRouter.post('/logout',logout)

