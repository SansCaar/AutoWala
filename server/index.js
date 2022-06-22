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
  app.use(express.json({
  	extended:false
  }));
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`The application is running in the port ${PORT}`);
});

<<<<<<< HEAD
app.use("/v1/api/user/",userRouter)
=======
app.use("/v1/api/users",userRouter)
>>>>>>> aa7dd69e5b65ba47629d25133f2ad5ec847b2b39
