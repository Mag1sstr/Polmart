import type { Product } from "../store/api";

function buildFilters(products: Product[]) {
  const filters: Record<string, Set<string | number | boolean>> = {};

  const excludedFields = new Set([
    "_id",
    "__v",
    "title",
    "category",
    "discount",
    "description",
    "price",
    "isNew",
    "images",
    "createdAt",
    "updatedAt",
  ]);

  products.forEach((product) => {
    Object.entries(product).forEach(([key, value]) => {
      if (excludedFields.has(key)) return;

      if (value === "" || value === 0 || value === null || value === undefined)
        return;

      if (typeof value === "object") return;

      if (!filters[key]) {
        filters[key] = new Set();
      }

      filters[key].add(value);
    });
  });

  return Object.fromEntries(
    Object.entries(filters).map(([key, set]) => [key, [...set]]),
  );
}
