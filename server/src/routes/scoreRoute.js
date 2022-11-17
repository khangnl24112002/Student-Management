const express = require("express");
const {
    getScoreController,
    createScoreController,
    deleteScoreController,
    updateScoreController,
    createMultipleScoreController,
    getAVGScoreController,
    getAVGScoreByCourseController,
} = require("../controllers/scoreControllers");

const scoreRouter = express.Router();

scoreRouter.get("/getScore", getScoreController);
scoreRouter.get("/avgScore", getAVGScoreController);
scoreRouter.get("/avgScoreByCourse", getAVGScoreByCourseController);
scoreRouter.post("/createScore", createScoreController);
scoreRouter.post("/createMultipleScore", createMultipleScoreController);
scoreRouter.delete("/deleteScore", deleteScoreController);
scoreRouter.put("/updateScore", updateScoreController);

module.exports = {
    scoreRouter,
};
