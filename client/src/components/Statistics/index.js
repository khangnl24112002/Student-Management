import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useParams, useLocation } from "react-router-dom";
import cn from "classnames";
import Dropdown from "../Dropdown";
import Card from "../Card";
import styles from "../Grades/Grades.module.sass";
import NameAndDescription from "./NameAndDescription/";
import Table from "./Table";
import {
    classesServices,
    coursesServices,
    studentServices,
} from "../../services/studentServices";

const termOptions = ["Semester 1", "Semester 2"];
const Subject = () => {
    const [courses, setCourses] = useState("");
    const [term, setTerm] = useState(termOptions[0]);
    const [visible, setVisible] = useState(false);
    const [courseOptions, setCourseOptions] = useState(["10A1"]);
    const { pathname } = useLocation();
    let [space, typeEdit, courseName] = pathname.split("/");
    const [students, setStudents] = useState([]);
    let classList = useRef(null);
    useEffect(() => {
        async function getCourses() {
            try {
                let { data } = await classesServices.getCourses(-1);
                data = data.map((item) => item.name);
                data = [...new Set(data)];
                setCourses(data[0]);
                setCourseOptions(data);
            } catch (e) {
                console.log(e);
                setCourseOptions([]);
            }
        }
        getCourses();
    }, []);
    useEffect(() => {
        console.log("hihi");
    }, [term, courses]);

    const handleChange = (item) => (e) => {};

    return (
        <>
            <Card
                className={styles.card}
                title="Subject Detail"
                classTitle={cn("title-red", styles.title)}
                classCardHead={cn(styles.head, { [styles.hidden]: visible })}
                head={
                    <>
                        <Dropdown
                            className={styles.field}
                            value={courses}
                            setValue={setCourses}
                            options={courseOptions}
                        />
                        <Dropdown
                            className={styles.field}
                            value={term}
                            setValue={setTerm}
                            options={termOptions}
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
                        data={students}
                        handleChange={handleChange}
                    />
                </div>
            </Card>
        </>
    );
};

export default Subject;
