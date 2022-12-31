import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useParams, useLocation } from "react-router-dom";
import cn from "classnames";
import Dropdown from "../Dropdown";
import Card from "../Card";
import styles from "./Grades.module.sass";
import Table from "./Table";
import {
    classesServices,
    studentServices,
} from "../../services/studentServices";
import moment from "moment";
import { addNotification } from "../../utils/toastify";
const Grades = () => {
    const [className, setClass] = useState("");
    const isInitialMount = useRef(true);
    const [classOptions, setClassOptions] = useState([]);
    const [visible, setVisible] = useState(false);
    const [studentsList, setStudentList] = useState([]);
    const { gradeId } = useParams();
    const { pathname } = useLocation();
    const [space, typeEdit, id] = pathname.split("/");
    const [studentDelete, setStudentDelete] = useState({});
    async function getClassesByGrade() {
        try {
            const { data } = await classesServices.getListClassesByGrades(
                gradeId
            );
            const classes = data.map((item) => {
                return item.name;
            });
            setClass(classes[0]);
            setClassOptions(classes);
        } catch (e) {
            console.log(e);
            setClass("");
            setClassOptions([]);
        }
    }
    useEffect(() => {
        // call api khi gradeid thay đổi

        getClassesByGrade();
    }, [gradeId]);
    async function getStudentsByClass() {
        try {
            const { data } = await studentServices.getStudentsByClass(
                className
            );
            const students = data.map((student) => {
                const date = moment.utc(student.date).format("DD-MM-YYYY");
                return {
                    ...student,
                    date,
                    avatar: student.gender
                        ? "/images/content/male.png"
                        : "/images/content/female.png",
                };
            });
            setStudentList(students);
        } catch (e) {
            console.log(e);
            setStudentList([]);
        }
    }
    useEffect(() => {
        getStudentsByClass();
    }, [className]);
    async function deleteStudent() {
        try {
            const { id } = studentDelete;
            const student = await studentServices.deleteStudent(+id);
            getStudentsByClass();
            addNotification("Delete successfully", 0);
        } catch (e) {
            addNotification("Can not delele student.", 3);
        }
    }
    useEffect(() => {
        console.log("change");
        console.log(studentDelete);
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            deleteStudent();
        }
    }, [studentDelete]);
    return (
        <>
            <Card
                className={styles.card}
                title="Grades"
                classTitle={cn("title-red", styles.title)}
                classCardHead={cn(styles.head, { [styles.hidden]: visible })}
                head={
                    <>
                        <Dropdown
                            className={styles.field}
                            value={className}
                            setValue={setClass}
                            options={classOptions}
                        />
                    </>
                }
            >
                <div className={cn(styles.row, { [styles.flex]: visible })}>
                    <Table
                        className={styles.table}
                        activeTable={visible}
                        setActiveTable={setVisible}
                        pathname={typeEdit}
                        data={studentsList}
                        nameClass={className}
                        gradeId={gradeId}
                        setStudentDelete={setStudentDelete}
                    />
                </div>
            </Card>
        </>
    );
};

export default Grades;
