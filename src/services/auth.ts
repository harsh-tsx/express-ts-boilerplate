import express, { ErrorRequestHandler } from "express";
import mongoose from "mongoose";

import routes from 'routes/auth/index'

import morgan from "morgan";

import { errorHandler } from "@middleware/errorHanlder";
import test from "@routes/auth/test";
import { port } from "@config/env";
const app = express();
app.use(express.json());

app.use(morgan("tiny"))

const prefix = "/auth"

app.use(prefix,routes.test)

app.use(errorHandler);

app.listen(port.authentication, () => {
  console.log(`Listening On PORT ${port.authentication}`);
});
