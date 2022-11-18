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
    studentServices,
} from "../../services/studentServices";

const termOptions = ["Semester 1", "Semester 2"];
const Subject = () => {
    const [className, setClass] = useState("");
    const [term, setTerm] = useState(termOptions[0]);
    const [visible, setVisible] = useState(false);
    const [classOptions, setClassOptions] = useState(["10A1"]);
    const { pathname } = useLocation();
    let [space, typeEdit, courseName] = pathname.split("/");
    const [students, setStudents] = useState([]);
    console.log(pathname);
    let classList = useRef(null);
    useEffect(() => {
        async function getClass() {
            try {
                let { data } = await classesServices.getClass(-1);
                data = data.map((item) => item.name);
                setClass(data[0]);
                setClassOptions(data);
            } catch (e) {
                console.log(e);
                setClassOptions([]);
            }
        }
        getClass();
    }, []);
    useEffect(() => {
        if (courseName === "Civics") {
            courseName = "Ethics";
        } else if (courseName === "PhysicalEducation") {
            courseName = "Physical Education";
        }
        async function getScoreByCourse() {
            try {
                let data = null;
                if (term === "Semester 1") {
                    data = await studentServices.getAVGByCourse(
                        className,
                        courseName,
                        1,
                        0
                    );
                } else {
                    data = await studentServices.getAVGByCourse(
                        className,
                        courseName,
                        0,
                        1
                    );
                }
                data.data = data.data.map((item) => {
                    return {
                        ...item,
                        avatar: item.gender
                            ? "/images/content/male.png"
                            : "/images/content/female.png",
                    };
                });
                setStudents(data.data);
            } catch (e) {
                console.log(e);
                setStudents([]);
            }
        }
        getScoreByCourse();
    }, [className, term, courseName]);
    console.log(classOptions);
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
                            value={className}
                            setValue={setClass}
                            options={classOptions}
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
                    />
                </div>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <NameAndDescription className={styles.card} />
                    </div>
                </div>
            </Card>
        </>
    );
};

export default Subject;
