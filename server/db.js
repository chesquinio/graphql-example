import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

export const connectDB = async () => {
  try {
    const conect = mongoose.connect(MONGODB_URI);
    console.log(`Database conected ${(await conect).Connection.name}`);
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};
