const { Course } = require("../models/index");

const createCourseService = (data) => {
    return new Promise(async (resolve, reject) => {
        const { gradeId, name } = data;

        try {
            const newCourse = await Course.create({
                gradeId,
                name,
            });
            resolve(newCourse);
        } catch (e) {
            reject(false);
        }
    });
};
const getCoursesService = (id) => {
    return new Promise(async (resolve, reject) => {
        if (id === -1) {
            const courses = await Course.findAll();
            resolve(courses);
        } else {
            const courses = await Course.findOne({
                where: {
                    id,
                },
            });
            if (courses) {
                resolve(courses);
            } else {
                reject({});
            }
        }
    });
};
module.exports = {
    createCourseService,
    getCoursesService,
};
