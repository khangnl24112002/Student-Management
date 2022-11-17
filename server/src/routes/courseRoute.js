const express = require("express");
const {
    createCourseController,
    getCoursesController,
} = require("../controllers/courseControllers");

const courseRoute = express.Router();

courseRoute.post("/createCourse", createCourseController);
courseRoute.get("/getCourses", getCoursesController);
module.exports = {
    courseRoute,
};
