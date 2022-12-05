import React, { useRef, useState } from "react";
import styles from "./Table.module.sass";
import cn from "classnames";
import Row from "./Row";

const Table = ({
    className,
    activeTable,
    setActiveTable,
    pathname,
    data,
    nameClass,
    gradeId,
    handleChange,
    multipleScoreUpdate,
}) => {
    const [activeId, setActiveId] = useState(data[0]?.id);

    const [selectedFilters, setSelectedFilters] = useState([]);

    return (
        <div className={cn(styles.wrapper, className)}>
            <div className={cn(styles.table)}>
                <div
                    className={cn(styles.row, { [styles.active]: activeTable })}
                >
                    <div className={styles.col}></div>

                    <div className={styles.col}>Name</div>
                    <div className={styles.col}>Exam15</div>
                    <div className={styles.col}>Exam45</div>
                    <div className={styles.col}>ExamFinal</div>
                </div>
                {data?.map((x, index) => (
                    <Row
                        item={x}
                        key={index}
                        activeTable={activeTable}
                        setActiveTable={setActiveTable}
                        activeId={activeId}
                        setActiveId={setActiveId}
                        value={selectedFilters.includes(x.id)}
                        handleChange={handleChange(x)}
                        pathname={pathname}
                        nameClass={nameClass}
                        gradeId={gradeId}
                        multipleScoreUpdate={multipleScoreUpdate}
                    />
                ))}
            </div>
        </div>
    );
};

export default Table;
