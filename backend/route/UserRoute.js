import express from "express";
import {
    getUser,
    getUserById,
    createUser,
    upateUser,
    deleteUser
} from "../controllers/UserController.js";
import {verifyUser, adminOnly} from "../middleware/AuthUser.js"
const router = express.Router();

router.get('/users',verifyUser,adminOnly, getUser);
router.get('/users/:id',verifyUser,adminOnly, getUserById);
router.post('/users',verifyUser,adminOnly, createUser);
router.patch('/users/:id',verifyUser,adminOnly, upateUser);
router.delete('/users/:id',verifyUser,adminOnly, deleteUser);

export default router