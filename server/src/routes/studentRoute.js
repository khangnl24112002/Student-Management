const express = require('express');
const { createStudentController, deteteStudentController, getStudentController, updateStudentController, getListClassStudentsController } = require('../controllers/studentControllers');


const studentRouter = express.Router();

studentRouter.post('/createStudent',createStudentController)
studentRouter.delete('/deleteStudent',deteteStudentController);
studentRouter.get('/getStudent',getStudentController);
studentRouter.put('/updateStudent',updateStudentController)
studentRouter.get('/getListStudent',getListClassStudentsController,)
module.exports = studentRouter;