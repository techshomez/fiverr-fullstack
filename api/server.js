import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

mongoose.set("strictQuery", true);

//connection to the database
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongoDB");
  } catch (error) {
    console.log(error);
  }
};

app.listen(8800, () => {
  connect();
  console.log("Backend server running!");
});
