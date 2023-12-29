//module req
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv').config();
const port = 5000;
const app = express();
app.use(express.json());

const userRouter = require("./routes/userRoutes");
const AppError = require("./utils/error");
const errorHandler = require("./middleware/errorHandler");

//mongoose connection
mongoose
  .connect(process.env.url, {
    useNewUrlParser: true,
    //useUniFieldTopology: true,
  })
  .then(() => {
    console.log("db connection sucessfull");
  })
  .catch((err) => {
    console.log("db connection failed",err);
  });

  app.use("/api/users", userRouter);

  app.all("*", (req, res, next) => {
    next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
  });
  
  app.use(errorHandler);
  
//server connection
app.listen(port, () => {
  console.log(`server running on link http://localhost:${port}`);
});
