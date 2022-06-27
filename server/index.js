import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import {connectDB} from  "./db/connect.js";
import userRouter from './routes/usersRouter.js';
import setRide from './routes/reqRide.js';

import colors from "colors"

const PORT = process.env.PORT || 3001;
const app = express();
dotenv.config();
connectDB();

// for monitoring the incomming requests to the server
app.use(
  cors({
    origin: "*",
  })
);

// for json data
app.use(express.json({
  	extended:false,
}));


app.listen(PORT, () => {
  console.log(`The application is running in the port ${PORT}`.white);
});

app.use("/v1/api/user",userRouter)
app.use("/v1/api/reqride",setRide)

