const { Grade } = require("../models/index");

const createGradeService = async (data) => {
    const { name } = data;

    return new Promise(async (resolve, reject) => {
        try {
            const newGrade = await Grade.create({
                name,
            });

            resolve(newGrade);
        } catch (e) {
            reject(false);
        }
    });
};

module.exports = {
    createGradeService,
};
