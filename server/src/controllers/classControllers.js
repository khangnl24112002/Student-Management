const {
    getClassesService,
    createClassService,
    deleteClassService,
    updateClassService,
    getListGradeClassesService,
} = require("../services/classServices");

const getClassController = async (req, res) => {
    const { id } = req.query;
    try {
        const classes = await getClassesService(+id);
        res.status(200).send({
            statusCode: 200,
            data: classes,
        });
    } catch (e) {
        console.log(e);
        res.status(404).send({
            statusCode: 404,
            "message:": "Not found.",
        });
    }
};
const createClassController = async (req, res) => {
    try {
        const newClass = await createClassService(req.body);
        res.status(200).send({
            statusCode: 200,
            data: newClass,
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            statusCode: 500,
            "message:": "Something went wrong.",
        });
    }
};
const deleteClassController = async (req, res) => {
    const { id } = req.query;
    try {
        await deleteClassService(id);
        res.status(200).send({
            statusCode: 200,
            message: "Successfully.",
        });
    } catch (e) {
        console.log(e);
        res.status(404).send({
            statusCode: 404,
            "message:": "Not found.",
        });
    }
};
const updateClassController = async (req, res) => {
    const { id } = req.query;
    try {
        const classes = await updateClassService(+id, req.body);
        res.status(200).send({
            statusCode: 200,
            data: classes,
        });
    } catch (e) {
        console.log(e);
        res.status(404).send({
            statusCode: 404,
            "message:": "Not found.",
        });
    }
};

const getListGradeClassesController = async(req, res) => {
    const gradeName  = req.query;

    try{
        const classes = await getListGradeClassesService(gradeName);
        res.status(200).send({
            statusCode: 200,
            data: classes,
        })
    } catch(e){
        console.log(e);
        res.status(404).send({
            statusCode: 404,
            "message:": "Not found.",
        })
    }
}

module.exports = {
    getClassController,
    createClassController,
    deleteClassController,
    updateClassController,
    getListGradeClassesController,
};
