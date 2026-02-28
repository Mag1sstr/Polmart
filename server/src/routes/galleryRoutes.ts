import { Router } from "express";
import {
  getGalleryItems,
  getGalleryItemById,
  createGalleryItem,
  updateGalleryItem,
  deleteGalleryItem
} from "../controllers/galleryController";

const router = Router();

router.get("/", getGalleryItems);
router.get("/:id", getGalleryItemById);
router.post("/", createGalleryItem);
router.put("/:id", updateGalleryItem);
router.delete("/:id", deleteGalleryItem);

export default router;

