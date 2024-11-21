import express, { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";
import app from "./src/app";
import { config } from "./src/config/config";
import connectDB from "./src/config/db";
import { error } from "console";

const startServer = async () => {
  // server start function

  await connectDB(); // connext to DATA BASE

  const port = config.port || 3000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

connectDB(); // connext to DATA BASE

startServer(); // server start function call

// global error handler
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;

  return res.status(statusCode).json({
    error: err.message,
    errorStack: config.env === "development" ? err.stack : "",
  });
});
