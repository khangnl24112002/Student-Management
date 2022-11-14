const express = require("express");
const {
    getClassController,
    createClassController,
    deleteClassController,
    updateClassController, 
    getListGradeClassesController,
} =  require("../controllers/classControllers");
const { getListGradeClassesService } = require("../services/classServices");

const classRouter = express.Router();

classRouter.get('/getClass',getClassController);
classRouter.post('/createClass',createClassController); 
classRouter.delete('/deleteClass',deleteClassController); 
classRouter.put('/updateClass',updateClassController);
classRouter.get('/getListGradeClasses', getListGradeClassesController)

module.exports = {
    classRouter,
}