import express from "express";
import {
    getUser,
    getUserById,
    createUser,
    upateUser,
    deleteUser
} from "../controllers/UserController.js";
import {varifyUser, adminOnly} from "../middleware/AuthUser.js"
const router = express.Router();

router.get('/users',varifyUser,adminOnly, getUser);
router.get('/users/:id',varifyUser,adminOnly, getUserById);
router.post('/users',varifyUser,adminOnly, createUser);
router.patch('/users/:id',varifyUser,adminOnly, upateUser);
router.delete('/users/:id',varifyUser,adminOnly, deleteUser);

export default router