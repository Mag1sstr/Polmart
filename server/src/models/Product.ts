import mongoose, { Schema, Document } from "mongoose";

export interface IProduct {
  price: number;
  class: number;
  thickness: number;
  size: string;
  package: number;
  moistureResistance: string;
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
  pricePer: string;
  category?: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    price: { type: Number, required: true },
    class: { type: Number, required: true },
    thickness: { type: Number, required: true },
    size: { type: String, required: true },
    package: { type: Number, required: true },
    moistureResistance: { type: String, required: true },
    material: { type: String, required: true },
    chamfer: { type: String, required: true },
    collection: { type: String, required: true },
    manufacturer: { type: String, required: true },
    country: { type: String, required: true },
    pattern: { type: String, required: true },
    isNew: { type: Boolean, default: false },
    boardLengthMm: { type: Number, required: true },
    boardWidthMm: { type: Number, required: true },
    areaM2: { type: Number, required: true },
    pricePer: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category" }
  },
  { timestamps: true }
);

export const Product = mongoose.model<IProduct>("Product", ProductSchema);

