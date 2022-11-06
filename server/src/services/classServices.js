const { Class, sequelize } = require("../models/index");

const getClassesService = async (clasID) => {
    return new Promise(async (resolve, reject) => {
        if (clasID === -1) {
            const allClasses = await Class.findAll();
            resolve(allClasses);
        } else {
            const classes = await Class.findOne({
                where: {
                    id: clasID,
                },
            });
            if (classes) {
                resolve(classes);
            } else {
                reject({});
            }
        }
    });
};

const createClassService = async (data) => {
    const { gradeID, name } = data;

    return new Promise(async (resolve, reject) => {
        try {
            const newClass = await Class.create({
                gradeID,
                name,
            });

            resolve(newClass);
        } catch (e) {
            reject(false);
        }
    });
};

const deleteClassService = async (classid) => {
    return new Promise(async (resolve, reject) => {
        const classes = await Class.findOne({
            where: {
                id: classid,
            },
        });
        if (classes) {
            await classes.destroy({ force: true });
            resolve(true);
        } else {
            reject(false);
        }
    });
};

const updateClassService = async (id, data) => {
    const { gradeID, name } = data;
    return new Promise(async (resolve, reject) => {
        const classes = await Class.findOne({
            where: { id },
        });
        if (classes) {
            await classes.update({
                gradeID,
                name,
            });
            await classes.save();
            resolve(classes);
        } else {
            reject({});
        }
    });
};

module.exports = {
    getClassesService,
    createClassService,
    deleteClassService,
    updateClassService,
};
