import { NextFunction, Request, Response } from "express";
import { Consult } from "../models/Consult";

export const getConsults = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const consults = await Consult.find();
    res.json(consults);
  } catch (error) {
    next(error);
  }
};

export const createConsult = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const consult = await Consult.create(req.body);
    res.status(201).json(consult);
  } catch (error) {
    next(error);
  }
};

export const deleteConsult = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const consult = await Consult.findByIdAndDelete(req.params.id);
    res.json(consult);
  } catch (error) {
    next(error);
  }
};

export const updateConsult = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const consult = await Consult.findByIdAndUpdate(req.params.id, req.body);
    res.json(consult);
  } catch (error) {
    next(error);
  }
};
