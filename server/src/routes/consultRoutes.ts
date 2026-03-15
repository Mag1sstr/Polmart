import { Router } from "express";
import {
  createConsult,
  deleteConsult,
  getConsults,
  updateConsult,
} from "../controllers/consultController";

const router = Router();

router.get("/", getConsults);
router.post("/", createConsult);
router.delete("/:id", deleteConsult);
router.put("/:id", updateConsult);

export default router;
