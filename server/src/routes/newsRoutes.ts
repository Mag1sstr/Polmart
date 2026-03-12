import { Router } from "express";
import {
  getNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews,
} from "../controllers/newsController";
import { upload } from "../multer/multer";

const router = Router();

router.get("/", getNews);
router.get("/:id", getNewsById);
router.post("/", upload.array("images"), createNews);
router.put("/:id", updateNews);
router.delete("/:id", deleteNews);

export default router;
