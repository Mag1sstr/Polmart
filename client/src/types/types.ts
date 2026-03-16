import type { Product } from "../store/api";
import type { TSort } from "../store/filtersSlice";

export interface IModalOpen {
  open: boolean;
  setOpen: (b: boolean) => void;
}
export type ProductFormData = Omit<Product, "_id"> & {
  images: File[];
};
export interface IProductParams {
  category?: string;
  title?: string;
  page?: number;
  size?: number;
  min_price?: number;
  max_price?: number;
  sort?: TSort;
}
export interface IOrder {
  _id: string;
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
export interface IConsult {
  _id: string;
  name: string;
  phone: string;
  address: string;
  status: "new" | "done";
  createdAt: Date;
}
