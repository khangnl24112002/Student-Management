const express = require("express");
const { userRouter } = require("./userRoute");
const rootRouter = express.Router();
rootRouter.use("/users", userRouter);
module.exports = rootRouter;
