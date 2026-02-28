import { Request, Response, NextFunction } from "express";
import { GalleryItem } from "../models/GalleryItem";

export const getGalleryItems = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await GalleryItem.find().sort({ date: -1 });
    res.json(items);
  } catch (err) {
    next(err);
  }
};

export const getGalleryItemById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await GalleryItem.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Gallery item not found" });
    }
    res.json(item);
  } catch (err) {
    next(err);
  }
};

export const createGalleryItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await GalleryItem.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
};

export const updateGalleryItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await GalleryItem.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!item) {
      return res.status(404).json({ message: "Gallery item not found" });
    }
    res.json(item);
  } catch (err) {
    next(err);
  }
};

export const deleteGalleryItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await GalleryItem.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Gallery item not found" });
    }
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

