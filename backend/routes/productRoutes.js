import express from 'express';
//the two functions below holds the logic previously moved from here to controllers:
import { getProducts, getProductsById } from '../controllers/productController.js';
const router = express.Router();



router.route('/').get(getProducts);

router.route('/:id').get(getProductsById);

export default router;