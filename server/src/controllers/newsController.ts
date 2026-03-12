import { Request, Response, NextFunction } from "express";
import { News } from "../models/News";

export const getNews = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const news = await News.find().sort({ publishedAt: -1 });
    res.json(news);
  } catch (err) {
    next(err);
  }
};

export const getNewsById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const item = await News.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "News item not found" });
    }
    res.json(item);
  } catch (err) {
    next(err);
  }
};

export const createNews = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const files = req.files as Express.Multer.File[];

    const imagePaths = files.map((file) => file.filename) || [];
    const item = await News.create({ ...req.body, images: imagePaths });
    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
};

export const updateNews = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const item = await News.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!item) {
      return res.status(404).json({ message: "News item not found" });
    }
    res.json(item);
  } catch (err) {
    next(err);
  }
};

export const deleteNews = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const item = await News.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "News item not found" });
    }
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
