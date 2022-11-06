const express = require("express");
const {
    getClassController,
    createClassController,
    deleteClassController,
    updateClassController, 
} =  require("../controllers/classControllers");

const classRouter = express.Router();

classRouter.get('/getClass',getClassController);
classRouter.post('/createClass',createClassController); 
classRouter.delete('/deleteClass',deleteClassController); 
classRouter.put('/updateClass',updateClassController);

module.exports = {
    classRouter,
}