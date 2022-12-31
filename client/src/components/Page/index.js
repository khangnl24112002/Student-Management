import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Page.module.sass";
import Sidebar from "../Sidebar";
import Header from "../Header";
import authApi from "../../api/authApi";
import { useNavigate } from "react-router-dom";
import { classesServices } from "../../services/studentServices";
const Page = ({ wide, children, title }) => {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    const [role, setRole] = useState("");
    const [userId, setUserId] = useState(null);
    const [course, setCourse] = useState("");

    const [data, setData] = useState({});
    useEffect(() => {
        async function auth() {
            try {
                const { data } = await authApi.verify();

                setData(data);
            } catch (e) {
                navigate("/");
                console.log(e);
            }
        }
        auth();
    }, []);
    function getUniqueListBy(arr, key) {
        return [...new Map(arr.map((item) => [item[key], item])).values()];
    }
    useEffect(() => {
        async function getCourses() {
            try {
                const { data } = await classesServices.getCourses(-1);
                const course = getUniqueListBy(data, "name");
                const dropdown = course.map((item) => {
                    return {
                        title: item.name,
                        url: `/subject/${item.name}`,
                    };
                });
                dropdown.push({
                    title: "Create Course",
                    url: "/createCourse",
                });
                console.log(dropdown);
                setCourse(dropdown);
            } catch (e) {
                console.log(e);
            }
        }
        getCourses();
    }, []);
    return (
        <>
            <div className={styles.page}>
                <Sidebar
                    dropdown={course}
                    data={data}
                    className={cn(styles.sidebar, {
                        [styles.visible]: visible,
                    })}
                    onClose={() => setVisible(false)}
                />
                <Header data={data} onOpen={() => setVisible(true)} />
                <div className={styles.inner}>
                    <div
                        className={cn(styles.container, {
                            [styles.wide]: wide,
                        })}
                    >
                        {title && (
                            <div className={cn("h3", styles.title)}>
                                {title}
                            </div>
                        )}
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
