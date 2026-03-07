export const getImage = (image: File | undefined) => {
  if (!image) return null;
  return `http://localhost:5000/uploads/${image}`;
};
