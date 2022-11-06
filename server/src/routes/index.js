const express = require("express");
const { classRouter } = require("./classRoute");
const studentRouter = require("./studentRoute");
const { userRouter } = require("./userRoute");

const rootRouter = express.Router();
rootRouter.use("/users", userRouter);
rootRouter.use("/students", studentRouter);
rootRouter.use("/class", classRouter);

module.exports = rootRouter;
