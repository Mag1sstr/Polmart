import type { Product } from "../store/api";

export const getUniqueValues = (arr: Product[]) => {
  if (!arr) return [];
  const keys = Object.keys(arr[0]);
  const varyingKeys = keys.filter((key) => {
    const values = arr.map((obj) => obj[key]);
    return new Set(values).size > 1;
  });

  return arr.map((obj) => {
    const newObj = {};
    varyingKeys.forEach((key) => {
      newObj[key] = obj[key];
    });
    return newObj;
  });
};
