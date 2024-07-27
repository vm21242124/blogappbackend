import express from 'express';
import { getAllUsers, getUserById } from '../controller/UserController.js';
const router=express.Router();

router.get("/all",getAllUsers);
router.get("/:id",getUserById);

export default router;