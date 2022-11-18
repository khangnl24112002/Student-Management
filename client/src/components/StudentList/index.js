import React, { useEffect, useState } from "react";
import styles from "./StudentList.module.sass";
import cn from "classnames";
import Card from "../Card";
import Form from "../../components/Form";
import Table from "./Table";
import { useLocation } from "react-router-dom";
import { studentServices } from "../../services/studentServices";
import moment from "moment";
const StudentList = () => {
    const [search, setSearch] = useState("");
    const [visible, setVisible] = useState(false);
    const { pathname } = useLocation();
    const [space, typeEdit, id] = pathname.split("/");
    const [studentList, setStudentList] = useState([]);
    const handleSubmit = (e) => {
        alert();
    };
    // useEffect(() => {
    //     if (search !== "") console.log(search);
    // }, [search]);
    useEffect(() => {
        async function getAllStudents() {
            try {
                const { data } = await studentServices.getAVGStudentList();
                const students = data.map((student) => {
                    const date = moment.utc(student.date).format("DD-MM-YYYY");
                    return {
                        ...student,
                        avatar: student.gender
                            ? "/images/content/male.png"
                            : "/images/content/female.png",
                        date,
                    };
                });

                setStudentList(students);
            } catch (e) {
                console.log(e);
                setStudentList([]);
            }
        }
        getAllStudents();
    }, []);

    return (
        <>
            <Card
                className={styles.card}
                title="Student Detail"
                classTitle={cn("title-purple", styles.title)}
                classCardHead={cn(styles.head, { [styles.hidden]: visible })}
                head={
                    <>
                        <Form
                            className={styles.form}
                            value={search}
                            setValue={setSearch}
                            onSubmit={() => handleSubmit()}
                            placeholder="Search by name or email"
                            type="text"
                            name="search"
                            icon="search"
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
                        data={studentList}
                    />
                </div>
            </Card>
        </>
    );
};

export default StudentList;
