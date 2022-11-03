const express = require("express");
const studentRouter = require("./studentRoute");
const { userRouter } = require("./userRoute");


const rootRouter = express.Router();
rootRouter.use("/users", userRouter);
rootRouter.use("/students", studentRouter);

module.exports = rootRouter;

