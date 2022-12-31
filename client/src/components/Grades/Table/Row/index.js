import React, { useState } from "react";
import styles from "./Row.module.sass";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
const Row = ({
    item,
    value,
    onChange,
    activeTable,
    setActiveTable,
    activeId,
    setActiveId,
    pathname,
    gradeId,
    nameClass,
    isDelete,
    setDelete,
    setStudentDelete,
}) => {
    const handleClick = (id) => {
        navigate(`/edit/${pathname}/${id}`, {
            state: { item, gradeId, nameClass },
        });
    };
    const handleDelete = (e) => {
        setDelete(true);
        setStudentDelete(item);
    };
    const navigate = useNavigate();
    return (
        <>
            <div
                className={cn(
                    styles.row,
                    { [styles.selected]: activeId === item.id },
                    { [styles.active]: activeTable }
                )}
                onClick={() => handleClick(item.id)}
            >
                <div className={styles.col}>
                    <div className={styles.item}>
                        <div className={styles.avatar}>
                            <img src={item.avatar} alt="Avatar" />
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.email}>{item.name}</div>
                </div>
                <div className={styles.col}>
                    <div className={styles.email}>{item.email}</div>
                </div>
                <div className={styles.col}>
                    <div className={styles.scoreBold}>{item.date}</div>
                </div>
                <div className={styles.col}>
                    <div className={styles.scoreBold}>{item.address}</div>
                </div>
            </div>
            <div
                className={styles.row}
                style={{ cursor: "pointer", margin: "20px" }}
                onClick={handleDelete}
            >
                <div className={styles.scoreBold}>Delete</div>
            </div>
        </>
    );
};

export default Row;
