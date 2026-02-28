import mongoose, { Schema, Document } from "mongoose";

export interface INews extends Document {
  img: string;
  publishedAt: Date;
  title: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}

const NewsSchema = new Schema<INews>(
  {
    img: { type: String, required: true },
    publishedAt: { type: Date, required: true },
    title: { type: String, required: true },
    text: { type: String, required: true }
  },
  { timestamps: true }
);

export const News = mongoose.model<INews>("News", NewsSchema);

