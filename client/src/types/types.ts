import type { Product } from "../store/api";

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
}
