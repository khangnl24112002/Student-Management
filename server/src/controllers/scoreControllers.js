const {
    getScoreService,
    createScoreService,
    deleteScoreService,
    updateScoreService,
    createMultipleScoreService,
    getAVGScoreService,
    getAVGScoreByCourseService,
} = require("../services/scoreServices");

const getScoreController = async (req, res) => {
    const { id } = req.query;
    try {
        const score = await getScoreService(+id);
        res.status(200).send({
            statusCode: 200,
            data: score,
        });
    } catch (e) {
        console.log(e);
        res.status(404).send({
            statusCode: 404,
            "message:": "Not found.",
        });
    }
};
const createScoreController = async (req, res) => {
    try {
        const newScore = await createScoreService(req.body);
        res.status(200).send({
            statusCode: 200,
            data: newScore,
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            statusCode: 500,
            "message:": "Something went wrong.",
        });
    }
};
const createMultipleScoreController = async (req, res) => {
    try {
        const newScore = await createMultipleScoreService(req.body);
        res.status(200).send({
            statusCode: 200,
            data: newScore,
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            statusCode: 500,
            "message:": "Something went wrong.",
        });
    }
};
const deleteScoreController = async (req, res) => {
    const { id } = req.query;
    try {
        await deleteScoreService(id);
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
const updateScoreController = async (req, res) => {
    const { id } = req.query;
    try {
        const score = await updateScoreService(+id, req.body);
        res.status(200).send({
            statusCode: 200,
            data: score,
        });
    } catch (e) {
        console.log(e);
        res.status(404).send({
            statusCode: 404,
            "message:": "Not found.",
        });
    }
};

const getAVGScoreController = async (req, res) => {
    const { id } = req.query;
    try {
        const { scores, avgTerm1, avgTerm2, avg } = await getAVGScoreService(
            +id
        );
        res.status(200).send({
            statusCode: 200,
            data: scores,
            avgTerm1,
            avgTerm2,
            avg,
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            statusCode: 500,
            "message:": "Something went wrong.",
        });
    }
};
const getAVGScoreByCourseController = async (req, res) => {
    const { courseName, nameClass, semesterOne, semesterTwo } = req.query;
    console.log(courseName);
    try {
        const data = await getAVGScoreByCourseService(
            courseName,
            nameClass,
            semesterOne,
            semesterTwo
        );
        res.status(200).send({
            statusCode: 200,
            data: data,
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
    getScoreController,
    createScoreController,
    deleteScoreController,
    updateScoreController,
    createMultipleScoreController,
    getAVGScoreController,
    getAVGScoreByCourseController,
};
