const { Student, sequelize } = require("../models/index");
const { QueryTypes } = require("sequelize");
const createStudentService = async (data) => {
    const { name, gender, date, address, email, classId } = data;

    return new Promise(async (resolve, reject) => {
        try {
            const newStudent = await Student.create({
                name,
                gender,
                date,
                address,
                email,
                classId,
            });

            resolve(newStudent);
        } catch (e) {
            reject(false);
        }
    });
};

const deleteStudentService = async (studentId) => {
    return new Promise(async (resolve, reject) => {
        const student = await Student.findOne({
            where: {
                id: studentId,
            },
        });
        if (student) {
            await student.destroy({ force: true });
            resolve(true);
        } else {
            reject(false);
        }
    });
};
const getStudentsService = async (studentId) => {
    return new Promise(async (resolve, reject) => {
        if (studentId === -1) {
            const allStudents = await Student.findAll();
            resolve(allStudents);
        } else {
            const student = await Student.findOne({
                where: {
                    id: studentId,
                },
            });
            if (student) {
                resolve(student);
            } else {
                reject({});
            }
        }
    });
};
const updateStudentService = async (id, data) => {
    const { name, gender, date, address, email, classId } = data;
    return new Promise(async (resolve, reject) => {
        const student = await Student.findOne({
            where: { id },
        });
        if (student) {
            await student.update({
                name,
                gender,
                date,
                address,
                email,
                classId,
            });
            await student.save();
            resolve(student);
        } else {
            reject({});
        }
    });
};
const getListClassStudentsService = async (limit, classId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = await sequelize.query(
                "SELECT COUNT(*) as number FROM `students` where type = ?",
                {
                    replacements: [`${type}`],
                    type: QueryTypes.SELECT,
                }
            );
            if (limit > query[0].number) {
                reject("Out of range.");
            } else {
                const classStudents = await Student.findAll({
                    limit,
                    where: {
                        type,
                    },
                    raw: true,
                });
                if (classStudents.length === 0) {
                    reject("Not found.");
                } else {
                    resolve(classStudents);
                }
            }
        } catch (e) {
            reject("Error from sever.");
        }
    });
};
module.exports = {
    createStudentService,
    deleteStudentService,
    getStudentsService,
    updateStudentService,
    getListClassStudentsService,
};
