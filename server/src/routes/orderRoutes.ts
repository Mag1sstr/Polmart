import { Router } from "express";
import {
  createOrder,
  deleteOrder,
  getOrders,
  updateOrder,
} from "../controllers/orderController";

const router = Router();

router.get("/", getOrders);
router.post("/", createOrder);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);

export default router;
