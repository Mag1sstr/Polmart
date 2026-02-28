import mongoose from "mongoose";

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is not set. Please add it to your .env file.");
  }

  await mongoose.connect(uri);
  // Connection options can be added here if needed
};

