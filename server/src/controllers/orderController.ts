import { NextFunction, Request, Response } from "express";
import { Order } from "../models/Order";

export const getOrders = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    next(error);
  }
};
export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};

export const updateOrder = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body);
    if (!order) {
      return res.status(404).json({ message: "News item not found" });
    }
    res.json(order);
  } catch (error) {
    next(error);
  }
};
export const deleteOrder = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    res.status(204).json(order);
  } catch (error) {
    next(error);
  }
};
