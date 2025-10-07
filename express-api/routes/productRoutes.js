import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts
} from "../controllers/productController.js";
import { validateProduct } from "../middleware/validation.js";
import { authenticate } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/search", searchProducts);
router.get("/:id", getProductById);
router.post("/", authenticate, validateProduct, createProduct);
router.put("/:id", authenticate, validateProduct, updateProduct);
router.delete("/:id", authenticate, deleteProduct);

export default router;
