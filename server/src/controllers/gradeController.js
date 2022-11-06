const { createGradeService } = require("../services/gradeServices");

const createGradeController = async (req, res) => {
    console.log(req.body);
    try {
        const newGrade = await createGradeService(req.body);
        res.status(200).send({
            statusCode: 200,
            data: newGrade,
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            statusCode: 500,
            "message:": "Something went wrong.",
        });
    }
};

module.exports = {
    createGradeController,
};
