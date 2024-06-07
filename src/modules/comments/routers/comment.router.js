import { Router } from "express";
import { createComment, deleteComment, readingComment, updateComment } from "../controllers/comment.controller.js";

export const commentRouter =Router();
commentRouter.post('/create',createComment)
commentRouter.get('/reading',readingComment)
commentRouter.put('/modify/:id',updateComment)
commentRouter.delete('/delete/:id',deleteComment)