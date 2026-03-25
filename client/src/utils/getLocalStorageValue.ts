export const getLocalStorageValue = <T>(value: string) => {
  const getStorage = localStorage.getItem(value);
  if (!getStorage) return [];
  return JSON.parse(getStorage) as T;
};
