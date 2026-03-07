import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ProductFormData } from "../types/types";

const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export interface Product {
  _id: string;
  title: string;
  description: string;
  discount?: number;
  price: number;
  class?: number;
  thickness?: number;
  size?: string;
  package?: number;
  moistureResistance?: boolean;
  material?: string;
  chamfer?: string;
  collection?: string;
  manufacturer?: string;
  country?: string;
  pattern?: string;
  isNew?: boolean;
  boardLengthMm?: number;
  boardWidthMm?: number;
  areaM2?: number;
  category: Category;
  images: File[];
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  img: string;
}

export interface NewsItem {
  _id: string;
  img: string;
  publishedAt: string;
  title: string;
  text: string;
}

export interface GalleryItem {
  _id: string;
  img: string;
  title: string;
  date: string;
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Product", "Category", "News", "Gallery"],
  endpoints: (builder) => ({
    checkAdmin: builder.mutation<
      { ok: boolean },
      { username: string; password: string }
    >({
      query: (body) => ({
        url: "/admin/check",
        method: "POST",
        body,
      }),
    }),

    getProducts: builder.query<Product[], { categorySlug?: string }>({
      query: (params) => ({
        url: "/products",
        params,
      }),
      providesTags: ["Product"],
    }),
    getSingleProduct: builder.query<Product, string>({
      query: (id) => ({
        url: `/products/${id}`,
      }),
    }),
    createProduct: builder.mutation<Product, FormData>({
      query: (body) => ({
        url: "/products",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation<
      Product,
      { id: string; data: Partial<Omit<Product, "_id">> }
    >({
      query: ({ id, data }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation<void, string>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),

    getCategories: builder.query<Category[], void>({
      query: () => "/categories",
      providesTags: ["Category"],
    }),
    createCategory: builder.mutation<Category, Omit<Category, "_id">>({
      query: (body) => ({
        url: "/categories",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Category"],
    }),
    updateCategory: builder.mutation<
      Category,
      { id: string; data: Partial<Omit<Category, "_id">> }
    >({
      query: ({ id, data }) => ({
        url: `/categories/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),
    deleteCategory: builder.mutation<void, string>({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),

    getNews: builder.query<NewsItem[], void>({
      query: () => "/news",
      providesTags: ["News"],
    }),
    createNews: builder.mutation<NewsItem, Omit<NewsItem, "_id">>({
      query: (body) => ({
        url: "/news",
        method: "POST",
        body,
      }),
      invalidatesTags: ["News"],
    }),
    updateNews: builder.mutation<
      NewsItem,
      { id: string; data: Partial<Omit<NewsItem, "_id">> }
    >({
      query: ({ id, data }) => ({
        url: `/news/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["News"],
    }),
    deleteNews: builder.mutation<void, string>({
      query: (id) => ({
        url: `/news/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["News"],
    }),

    getGallery: builder.query<GalleryItem[], void>({
      query: () => "/gallery",
      providesTags: ["Gallery"],
    }),
    createGalleryItem: builder.mutation<GalleryItem, Omit<GalleryItem, "_id">>({
      query: (body) => ({
        url: "/gallery",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Gallery"],
    }),
    updateGalleryItem: builder.mutation<
      GalleryItem,
      { id: string; data: Partial<Omit<GalleryItem, "_id">> }
    >({
      query: ({ id, data }) => ({
        url: `/gallery/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Gallery"],
    }),
    deleteGalleryItem: builder.mutation<void, string>({
      query: (id) => ({
        url: `/gallery/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Gallery"],
    }),
  }),
});

export const {
  useCheckAdminMutation,
  useGetProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useGetNewsQuery,
  useCreateNewsMutation,
  useUpdateNewsMutation,
  useDeleteNewsMutation,
  useGetGalleryQuery,
  useCreateGalleryItemMutation,
  useUpdateGalleryItemMutation,
  useDeleteGalleryItemMutation,
  useGetSingleProductQuery,
} = api;
