import express from "express";
import cors from "cors";

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