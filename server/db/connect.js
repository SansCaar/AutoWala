import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Database connected : ${conn.connection.host}`.cyan.bold);
  } catch (error) {
    console.log("Database error:" + error.red);
  }
};
