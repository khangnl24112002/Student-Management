import axiosClient from "../api/apiClient";

export const studentServices = {
    getListStudents: (id) => axiosClient.get(`students/getStudent?id=${id}`),
    getStudentsByClass: (name) =>
        axiosClient.get(`students/getListClassStudents?name=${name}`),
    getAVGStudentList: () => axiosClient.get(`scores/getAllStudentScore`),
    getAVGStudent: (id) => axiosClient.get(`scores/avgScore?id=${id}`),
    getAVGByCourse: (nameClass, courseName, semesterOne, semesterTwo) =>
        axiosClient.get(
            `scores/avgScoreByCourse?courseName=${courseName}&nameClass=${nameClass}&semesterOne=${semesterOne}&semesterTwo=${semesterTwo}`
        ),
    createStudent: (params) =>
        axiosClient.post(`students/createStudent`, params),
};

export const classesServices = {
    getListClassesByGrades: (id) =>
        axiosClient.get(`classes/getListGradeClasses?name=${id}`),
    getClassCurSize: (name) =>
        axiosClient.get(`classes/getClassCurSize?name=${name}`),
    changeClass: (studentId, classId) =>
        axiosClient.put(
            `classes/changeClass?studentId=${studentId}&classId=${classId}`
        ),
    getClass: (id) => axiosClient.get(`classes/getClass?id=${id}`),
    getClassNotFull: () => axiosClient.get(`classes/getNotFullClasses`),
    createClass: (params) => axiosClient.post(`classes/createClass`, params),
    getClassNumberStudent: (name) =>
        axiosClient.get(`classes/getClassNumberStudent?name=${name}`),
};
