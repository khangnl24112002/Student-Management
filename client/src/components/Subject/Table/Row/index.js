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
}) => {
    const handleClick = (id) => {
        console.log(id);
        navigate(`/student-detail/${id}`, { state: { item } });
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
                <div className={styles.col}>{item.id}</div>

                <div className={styles.col}>
                    <div className={styles.item}>
                        <div className={styles.avatar}>
                            <img src={item.avatar} alt="Avatar" />
                        </div>
                        <div className={styles.details}>
                            <div className={styles.user}>{item.name}</div>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={cn("status-green-dark", styles.purchase)}>
                        {item.exam15}
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={cn("status-green-dark", styles.purchase)}>
                        {item.exam45}
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={cn("status-green-dark", styles.purchase)}>
                        {item.examFinal}
                    </div>
                </div>
                {/* <div className={styles.col}>
                    <div className={styles.score}>
                        <div className={styles.scoreBold}>{item.avg}</div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.score}>
                        <div className={styles.scoreBold}>{item.type}</div>
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default Row;
