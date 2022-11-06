const express = require("express");
const rootRouter = express.Router();
const userRouter = require("./userRoutes");
rootRouter.use("/users", userRouter);
module.exports = rootRouter;
