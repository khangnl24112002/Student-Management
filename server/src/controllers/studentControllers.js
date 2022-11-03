const { 
    createStudentService, 
    deleteStudentService, 
    getStudentsService, 
    updateStudentService, 
    getListClassStudentsService } 
    = require("../services/studentServices")

const createStudentController = async (req,res) => {
    
    try {
        const newStudent = await createStudentService(req.body)
        res.status(200).send({
            statusCode: 200,
            data:newStudent
        });
    } catch(e) {
        console.log(e)
        res.status(500).send({
            statusCode: 500,
            "message:": "Something went wrong.",
        });
    }

}
const deteteStudentController = async (req,res) => {
    const {id} = req.query;
    try {
        await deleteStudentService(id);
        res.status(200).send({
            statusCode: 200,
            message: "Successfully."
        })
    } catch(e) {
        console.log(e);
        res.status(404).send({
            statusCode: 404,
            "message:": "Not found.",
        });
    }
}
const getStudentController = async (req,res) => {
    const {id} = req.query;
    try {
        const student = await getStudentsService(+id);
        res.status(200).send({
            statusCode: 200,
            data:student
        });
    } catch(e) {
        console.log(e);
        res.status(404).send({
            statusCode: 404,
            "message:": "Not found.",
        });
    }
}
const updateStudentController = async (req,res) => {
    try {
        const student = await updateStudentService(req.body);
        res.status(200).send({
            statusCode: 200,
            data:student
        });
    } catch(e) {
        console.log(e);
        res.status(404).send({
            statusCode: 404,
            "message:": "Not found.",
        });
    }
}
const getListClassStudentsController = async (req,res) => {
    const {limit,type} = req.query;
    try {
        let students = await getListClassStudentsService(+limit,classId);
        
        for(let i = 0;i < Object.keys(students).length;i++) {
            
            if(students[i].poster_student) {
                students[i].poster_student = convertImage(students[i].poster_student);
            }
        }
        res.status(200).send({
            statusCode: 200,
            data:students
        });
    } catch(e) {
        res.status(400).send({
            statusCode: 400,
            "message:": e,
        });
    }
}
module.exports = {
    createStudentController,
    deteteStudentController,
    getStudentController,
    updateStudentController,
    getListClassStudentsController,
}