import React, { useEffect, useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./NameAndDescription.module.sass";
import Card from "../../../components/Card";
import TextInput from "../../../components/TextInput";
import Dropdown from "../../Dropdown";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
const gradeOptions = ["10", "11", "12"];
const NameAndDescription = ({ className }) => {
    const [value, setValue] = React.useState("1");

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };
    const handleChange = () => {};
    const handleSubmit = () => {};
    const [grade, setGrade] = React.useState("10");
    return (
        <Card
            className={cn(styles.card, className)}
            title="Course Update"
            classTitle="title-green"
        >
            <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <TabList
                            onChange={handleChangeTab}
                            aria-label="lab API tabs example"
                        >
                            <Tab
                                label="Create Course"
                                value="1"
                                sx={{
                                    color: "#ffffff",
                                    marginBottom: "14px",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    lineHeight: 1.7142857143,
                                }}
                            />
                            <Tab
                                label="Update Course"
                                value="2"
                                sx={{
                                    color: "#ffffff",
                                    marginBottom: "14px",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    lineHeight: 1.7142857143,
                                }}
                            />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <form
                            className={styles.description}
                            onSubmit={handleSubmit}
                        >
                            <div className={styles.group}>
                                <TextInput
                                    className={styles.field}
                                    label="Course Name"
                                    name="name"
                                    type="text"
                                    placeholder="Value"
                                    required
                                    handleChange={handleChange}
                                />
                                <TextInput
                                    className={styles.field}
                                    label="Score"
                                    name="numerStudent"
                                    type="text"
                                    placeholder="Value"
                                    required
                                    handleChange={handleChange}
                                />
                            </div>
                            <Dropdown
                                value={grade}
                                setValue={setGrade}
                                options={gradeOptions}
                                className={cn(styles.dropDown)}
                            />
                            <div className={styles.buttonContainer}>
                                <button className={cn("button")} type="submit">
                                    Save
                                </button>
                            </div>
                        </form>
                    </TabPanel>
                    <TabPanel value="2">
                        <div
                            style={{
                                marginBottom: "14px",
                                fontSize: "14px",
                                fontWeight: 600,
                                lineHeight: 1.7142857143,
                            }}
                        >
                            List Courses
                        </div>
                        <Dropdown
                            value={grade}
                            setValue={setGrade}
                            options={gradeOptions}
                            className={cn(styles.dropDown)}
                        />
                        <form
                            className={styles.description}
                            onSubmit={handleSubmit}
                        >
                            <TextInput
                                className={styles.field}
                                label="Current Course Name"
                                name="name"
                                type="text"
                                placeholder="Value"
                                required
                                handleChange={handleChange}
                            />
                            <TextInput
                                className={styles.field}
                                label="New Course Name"
                                name="numerStudent"
                                type="text"
                                placeholder="Value"
                                required
                                handleChange={handleChange}
                            />
                            <TextInput
                                className={styles.field}
                                label="New Score"
                                name="numerStudent"
                                type="text"
                                placeholder="Value"
                                required
                                handleChange={handleChange}
                            />

                            <div className={styles.buttonContainer}>
                                <button className={cn("button")} type="submit">
                                    Save
                                </button>
                            </div>
                        </form>
                    </TabPanel>
                </TabContext>
            </Box>
        </Card>
    );
};

export default NameAndDescription;
