export const getImage = (image: File | undefined) => {
  const url = import.meta.env.VITE_SHORT_API_URL || "http://localhost:5000";
  if (!image) return null;
  return `${url}/uploads/${image}`;
};
