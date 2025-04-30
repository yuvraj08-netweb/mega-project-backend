import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n Connected to MongoDB successfully DB HOST: ${connectionInstance.connection.host} DB NAME: ${connectionInstance.connection.name}`
    );
  } catch (error) {
    console.error("Mongodb connection failed",error);
    process.exit(1); // Exit the process with failure
  }
}; 

export default connectDB;