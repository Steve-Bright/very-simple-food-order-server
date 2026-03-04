import mongoose from "mongoose";
import { env } from "../../shared/env";

export const connectToMongoDB = async () => {
  try {
    await mongoose.connect(env.mongo);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};