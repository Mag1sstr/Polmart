import mongoose, { Schema, Document } from "mongoose";

export interface IGalleryItem extends Document {
  img: string;
  title: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

const GalleryItemSchema = new Schema<IGalleryItem>(
  {
    img: { type: String, required: true },
    title: { type: String, required: true },
    date: { type: Date, required: true }
  },
  { timestamps: true }
);

export const GalleryItem = mongoose.model<IGalleryItem>("GalleryItem", GalleryItemSchema);

