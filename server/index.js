import express from "express";
import cors from "cors";
import "./db/connect.js";
import userRouter from './routes/usersRouter.js';
const app = express();

// for monitoring the incomming requests to the server
app.use(
  cors({
    origin: "*",
  })
);
  
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`The application is running in the port ${PORT}`);
});

app.use("/v1/api/users",userRouter)