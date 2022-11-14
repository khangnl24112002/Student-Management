const { Student, Class, sequelize } = require("../models/index");
const { QueryTypes } = require("sequelize");
const e = require("express");

const createStudentService = async (data) => {
    const { name, gender, date, address, email, classId } = data;

    return new Promise(async (resolve, reject) => {
        try {
                const count = await Student.count({
                where: {classId}
            });

            const max = await sequelize.query(
                "SELECT `numberStudent` as number FROM `classes` WHERE `id` = ?",
                {
                    replacements: [`${classId}`],
                    type: QueryTypes.SELECT,
                }
            );

            if (count>=max[0].number)
                reject(false);
            else
                {
                const newStudent = await Student.create({
                    name,
                    gender,
                    date,
                    address,
                    email,
                    classId,
                });

                resolve(newStudent);
                }

            }
        catch (e) {
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

            const count = await Student.count({
                where: {classId}
            });

            const max = await sequelize.query(
                "SELECT `numberStudent` as number FROM `classes` WHERE `id` = ?",
                {
                    replacements: [`${classId}`],
                    type: QueryTypes.SELECT,
                }
            );

            if (count>=max[0].number)
                reject({});
            
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
            
            //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

            //CHÚ Ý CHÚ Ý CHÚ Ý CHÚ Ý CHÚ Ý

            //console.debug(name, classId); địt mẹ sao nó chạy tới đây mà vẫn gửi reject?

            //CHÚ Ý CHÚ Ý CHÚ Ý CHÚ Ý CHÚ Ý

            //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


        } else {
            reject({});
        }
    });
};
const getListClassStudentsService = async (className) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(className);
            const classId = await sequelize.query(
                "SELECT id as classId FROM `classes` WHERE `name` = ?",
                {
                    replacements: [`${className.name}`],
                    type: QueryTypes.SELECT,
                }
            )

            console.log(classId[0].classId);
            
            const classStudents = await Student.findAll({
                where: {
                    classId : classId[0].classId,
                },
                raw: true,
            });
            if (classStudents.length === 0) {
                reject("Not found.");
            } else {
                resolve(classStudents);
                
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
