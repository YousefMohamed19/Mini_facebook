import { Router } from "express";
import { specialPost, specialSearch } from "../controller/special.controller.js";
export const specialRouter = Router();

specialRouter.get('/:userId/:postId', specialSearch);
specialRouter.get('/:postId', specialPost);