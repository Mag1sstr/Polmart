import mongoose from "mongoose";

interface IConsult {
  name: string;
  phone: string;
  address: string;
  status: "new" | "done";
  createdAt: Date;
}

const ConsultSchema = new mongoose.Schema<IConsult>(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    status: { type: String, enum: ["new", "done"], default: "new" },
  },
  { timestamps: true },
);

export const Consult = mongoose.model("Consult", ConsultSchema);
