import express from "express";
import {
    getProduct,
    getProductById,
    createProduct,
    upateProduct,
    deleteProduct
} from "../controllers/ProductController.js"
import {varifyUser} from "../middleware/AuthUser.js";
const router = express.Router();

router.get('/products', varifyUser,  getProduct);
router.get('/products/:id', varifyUser,  getProductById);
router.post('/products', varifyUser,  createProduct);
router.patch('/products/:id', varifyUser,  upateProduct);
router.delete('/products/:id', varifyUser,  deleteProduct);

export default router