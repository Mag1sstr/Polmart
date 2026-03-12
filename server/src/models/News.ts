import mongoose, { Schema, Document } from "mongoose";

export interface INews extends Document {
  images: string[];
  publishedAt: Date;
  title: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}

const NewsSchema = new Schema<INews>(
  {
    images: [String],
    publishedAt: { type: Date, required: true },
    title: { type: String, required: true },
    text: { type: String, required: true },
  },
  { timestamps: true },
);

export const News = mongoose.model<INews>("News", NewsSchema);
