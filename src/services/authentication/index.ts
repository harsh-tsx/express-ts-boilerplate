import express, { ErrorRequestHandler } from "express";
import createHttpError from "http-errors";

import mongoose from "mongoose";
// import { DB, PORT } from "./config";

import { errorHandler } from "@middleware/errorHanlder";
import morgan from "morgan";
import { DB, PORT } from "@config/index";
const app = express();
app.use(express.json());



app.use(() => {
  throw createHttpError(404, "Route not found");
});

app.use(errorHandler);
console.log(DB)

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connected to db");
    app.listen(PORT, () => {
      console.log(`Listening On PORT ${PORT}`);
    });
  })
  .catch((e) => {
    console.log('e', e)
    throw createHttpError(501, "Unable to connect database");
  });
