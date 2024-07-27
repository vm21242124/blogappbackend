import express from 'express';
import { createBlog, deleteBlog, getAllBlogsByAuthor, updateBlog } from '../controller/BlogController.js';

const router=express.Router();

router.post("/create",createBlog);
router.put("/update/:id",updateBlog);
router.delete("/delete/:id",deleteBlog);
router.get("/author/:authorId",getAllBlogsByAuthor);


export default router;