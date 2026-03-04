import mongoose, { Schema, Document } from "mongoose";

export interface IProduct {
  title: string;
  description: string;
  discount: number;
  price: number;
  class: number;
  thickness: number;
  size: string;
  package: number;
  moistureResistance: boolean;
  material: string;
  chamfer: string;
  collection: string;
  manufacturer: string;
  country: string;
  pattern: string;
  isNew: boolean;
  boardLengthMm: number;
  boardWidthMm: number;
  areaM2: number;
  category?: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    discount: { type: Number, default: 0 },
    price: { type: Number, required: true },
    class: { type: Number },
    thickness: { type: Number },
    size: { type: String },
    package: { type: Number },
    moistureResistance: { type: Boolean },
    material: { type: String },
    chamfer: { type: String },
    collection: { type: String },
    manufacturer: { type: String },
    country: { type: String },
    pattern: { type: String },
    isNew: { type: Boolean, default: false },
    boardLengthMm: { type: Number },
    boardWidthMm: { type: Number },
    areaM2: { type: Number },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
  },
  { timestamps: true },
);

export const Product = mongoose.model<IProduct>("Product", ProductSchema);
