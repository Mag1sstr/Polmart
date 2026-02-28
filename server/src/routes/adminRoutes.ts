import { Router } from "express";
import { checkAdmin } from "../controllers/adminController";

const router = Router();

// POST /api/admin/check  { username, password }
router.post("/check", checkAdmin);

export default router;

