import mongoose from "mongoose";

const MONGODB_URI = `mongodb+srv://francis:qONcXhNyOPgVI7nR@cluster0.gdk5sty.mongodb.net/?retryWrites=true&w=majority`;

export const connectDB = async () => {
  try {
    const conect = mongoose.connect(MONGODB_URI);
    console.log(`Database conected ${(await conect).Connection.name}`);
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};
