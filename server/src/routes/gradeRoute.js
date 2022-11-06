const express = require("express");
const { createGradeController } = require("../controllers/gradeController");

const gradeRouter = express.Router();

gradeRouter.post("/createGrade", createGradeController);

module.exports = {
    gradeRouter,
};
