import { Router } from "express";
import { createPost, deletePost, readingPost, updatePost } from "../controllers/posts.controllers.js";

export const postRouter=Router()
postRouter.post('/create',createPost)
postRouter.get('/reading',readingPost)
postRouter.put('/modify/:id',updatePost)
postRouter.delete('/delete/:id',deletePost)