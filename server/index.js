import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db/connect.js";
import userRouter from "./routes/usersRouter.js";
import setRide from "./routes/reqRide.js";

// this pacakage is imported to make the terminal more colorfull and easy to use @alert donot remove it or else the app will break.
import colors from "colors";

const PORT = process.env.PORT || 3001;
const app = express();
dotenv.config();
connectDB();

// for monitoring the incomming requests to the server
app.use(cors());

// for json data
app.use(
  express.json({
    extended: false,
  })
);

// for making the upload folder publically accessable

app.use("/uploads", express.static("uploads"));

app.listen(PORT, () => {
  console.log(`The application is running in the port ${PORT}`.white);
});

app.use("/v1/api/user", userRouter);
app.use("/v1/api/reqride", setRide);
