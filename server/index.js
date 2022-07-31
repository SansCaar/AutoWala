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

//   {
//     user_toc: {
//       date: "Jul 30th 2022",
//       time: "16:07:78",
//     },
//     _id: "62e511a7a84c4191fa493d98",
//     user_name: "Utsav bhattarai",
//     user_email: "utsavbhattarai007@gmail.com",
//     user_address: "Butwal",
//     user_contact: "9847508469",
//     user_gfid:
//       "ya29.A0AVA9y1ug3lFDG5jS4nfN9in9FQ2gY4e2rwgb0EU8d9yIeXQvkt3FPiht2pevbUWScXXsIVW6j2me8Lb-SD0uTSWqp4JDNZgjG2rxhV1ZF4S-hNcAfDNoYXchSDFSYEtfhxXrM1NKu9ymkxCtV9zB9b-fiHsWYUNnWUtBVEFTQVRBU0ZRRTY1ZHI4WjVGTV9yTFFibFFQNWE3ODd4WU1hdw0163",
//     user_image:
//       "http://192.168.156.110:3001uploads\\a8ffc2a4-c422-449b-93c8-f68dd4e24741IMG_20220729_222916.jpg",
//     __v: 0,
//   },
//   {
//     user_toc: {
//       date: "Jul 30th 2022",
//       time: "19:07:71",
//     },
//     _id: "62e53a6cf1a19219593c0785",
//     user_name: "Utsav",
//     user_email: "ninja08469@gmail.com",
//     user_address: "Butwal",
//     user_contact: "9658855555",
//     user_gfid:
//       "ya29.A0AVA9y1uMkND-_fHclwhPSo3_PlEKwLO9vyUTdltD47SyjSIh23mQ1rAa-7r1uUBAd7B_IG12Y3QeGT5Zc24-WmH5IuYZI-GkWi7Cj6gA_z-atrV-rTi-epj6G6eU0lSWyHgwNpYKJWyd-w3HKDQnvQ3YpQ9vYUNnWUtBVEFTQVRBU0ZRRTY1ZHI4Vm1KWVlIUTJKTWdpZDJ1UVFPY1lrdw0163",
//     user_image:
//       "http://192.168.156.235:3001/uploads\\6febebb4-e79a-40e3-be89-be217b71a3d5IMG_20220729_222932.jpg",
//     __v: 0,
//   },
//   {
//     user_toc: {
//       date: "Jul 30th 2022",
//       time: "19:07:32",
//     },
//     _id: "62e53aedf1a19219593c078b",
//     user_name: "Utsav",
//     user_email: "h3llo.ff69@gmail.com",
//     user_address: "Butwal",
//     user_contact: "9784649494",
//     user_gfid:
//       "ya29.A0AVA9y1uAmvzV6NXztflJXFtxG-xX79hgf-3SdJEu_tMKRotCJjYT71q4aBnS8ZCYyxJ-DcNsjrTTFxf-jpTc5qaBSptN1VoeYV-pIF_eAa1602ftUcvIHlhcFJEZmDIV7qnJbZufy7L9L2F4Vfn17Tll2icyYUNnWUtBVEFTQVRBU0ZRRTY1ZHI4bjBCN3JLMk9FbTltX096OW96QVN1Zw0163",
//     user_image:
//       "http://192.168.156.235:3001/uploads\\30116a4c-0afa-4cb7-8558-eb56f664f4b6IMG_20220701_175855.jpg",
//     __v: 0,
//   },
// ];
