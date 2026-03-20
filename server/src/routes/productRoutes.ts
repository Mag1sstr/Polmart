import { Router } from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductFilters,
} from "../controllers/productController";
import { upload } from "../multer/multer";

const router = Router();

router.get("/", getProducts);
router.get("/filters", getProductFilters);
router.get("/:id", getProductById);
router.post("/", upload.array("images"), createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
