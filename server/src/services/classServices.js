const { Class, Student, sequelize } = require("../models/index");
const { QueryTypes } = require("sequelize");
const studentRouter = require("../routes/studentRoute");


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

const getListGradeClassesService = async (gradeName) => {
    return new Promise(async (resolve, reject) => {
        try {


            const gradeId = await sequelize.query(
                "SELECT id as gradeId FROM `grades` WHERE `name` = ?",
                {
                    replacements: [`${gradeName.name}`],
                    type: QueryTypes.SELECT,
                }
            )

            console.log(gradeId[0].gradeId);
            
            const gradeClasses = await Class.findAll({
                where: {
                    gradeId : gradeId[0].gradeId,
                },
                raw: true,
            });
            

            if (gradeClasses.length === 0) {
                reject("Not found.");
            } else {
                resolve(gradeClasses);
            }


        } catch (e) {
            reject("Error from sever.");
        }
    });
};

const getAllClassesService = async() => {
    return new Promise(async(resolve, reject) => {
        try {

            const classes = await Class.findAll({
                raw: true,
            })

            if (classes.length === 0){
                reject("Not found.");
            } else {
                resolve(classes);
            }

        } catch(e)
        {
            reject("Error from sever.");
        }
    })
}

const getNotFullClassesService = async() => {
    return new Promise(async(resolve, reject) => {
        try {

            const classes = await sequelize.query(
                "SELECT DISTINCT cl.id, cl.gradeId, cl.name, cl.numberStudent, cl.createdAt, cl.updatedAt FROM student_management.classes as cl join student_management.students as st1 on cl.id = st1.classId where cl.numberStudent> (SELECT count(*) FROM student_management.students as st2 where st2.classId = cl.id) ",
                {
                type: QueryTypes.SELECT,
                }
            )

            console.debug(classes);

            if (classes.length === 0){
                reject("Not found.");
            } else {
                resolve(classes);
            }

        } catch(e)
        {
            reject("Error from sever.");
        }
    })
}


module.exports = {
    getClassesService,
    createClassService,
    deleteClassService,
    updateClassService,
    getListGradeClassesService,
    getAllClassesService,
    getNotFullClassesService,
};
