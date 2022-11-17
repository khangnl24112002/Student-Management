const express = require("express");
const { classRouter } = require("./classRoute");
const { gradeRouter } = require("./gradeRoute");
const studentRouter = require("./studentRoute");
const { userRouter } = require("./userRoute");
const { scoreRouter } = require("./scoreRoute");
const { courseRoute } = require("./courseRoute");

const rootRouter = express.Router();
rootRouter.use("/users", userRouter);
rootRouter.use("/students", studentRouter);
rootRouter.use("/classes", classRouter);
rootRouter.use("/grades", gradeRouter);
rootRouter.use("/scores", scoreRouter);
rootRouter.use("/courses", courseRoute);
module.exports = rootRouter;
