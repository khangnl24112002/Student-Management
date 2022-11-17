const {
    createCourseService,
    getCoursesService,
} = require("../services/courseServices");

const createCourseController = async (req, res) => {
    try {
        const course = await createCourseService(req.body);
        res.status(200).send({
            statusCode: 200,
            data: course,
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            statusCode: 500,
            "message:": "Something went wrong.",
        });
    }
};
const getCoursesController = async (req, res) => {
    const { id } = req.query;
    try {
        const courses = await getCoursesService(+id);
        res.status(200).send({
            statusCode: 200,
            data: courses,
        });
    } catch (e) {
        console.log(e);
        res.status(404).send({
            statusCode: 404,
            "message:": "Not found.",
        });
    }
};
module.exports = {
    createCourseController,
    getCoursesController,
};
