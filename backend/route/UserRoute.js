import express from "express";
import {
    getUser,
    getUserById,
    createUser,
    upateUser,
    deleteUser
} from "../controllers/UserController.js"
const router = express.Router();

router.get('/users', getUser);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.patch('/users/:id', upateUser);
router.delete('/users/:id', deleteUser);

export default router