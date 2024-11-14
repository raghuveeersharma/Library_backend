import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.dbUrl as string);

    mongoose.connection.on("connected", () => {
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    });
    mongoose.connection.on("error", (err) => {
      console.log("error in db connection", err);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
