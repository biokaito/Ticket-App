import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";

import { errorHandler } from "@sgtickets/common";
import { NotFoundError } from "@sgtickets/common";

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: true
  })
);

app.all("*", (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export {app};