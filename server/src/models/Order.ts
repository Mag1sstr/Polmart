import mongoose from "mongoose";

interface IOrder extends Document {
  product_id: string;
  product_title: string;
  product_price: number;
  product_count: number;
  name: string;
  phone: string;
  email: string;
  created_at: Date;
  status: "new" | "confirmed" | "cancelled" | "done";
}

const OrderSchema = new mongoose.Schema<IOrder>({
  product_id: { type: String, required: true },
  product_title: { type: String, required: true },
  product_price: { type: Number, required: true },
  product_count: { type: Number, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  created_at: { type: Date, required: true },
  status: {
    type: String,
    enum: ["new", "confirmed", "cancelled", "done"],
    default: "new",
  },
});

export const Order = mongoose.model("Order", OrderSchema);
