import type { Product } from "../store/api";

export interface IModalOpen {
  open: boolean;
  setOpen: (b: boolean) => void;
}
export type ProductFormData = Omit<Product, "_id"> & {
  images: File[];
};
