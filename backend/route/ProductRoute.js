import express from "express";
import {
    getProduct,
    getProductById,
    createProduct,
    upateProduct,
    deleteProduct
} from "../controllers/ProductController.js"
const router = express.Router();

router.get('/product', getProduct);
router.get('/product/{id}', getProductById);
router.post('/product', createProduct);
router.patch('/product/{id}', upateProduct);
router.delete('/product/{id}', deleteProduct);

export default router