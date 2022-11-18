import React from "react";
import cn from "classnames";
import styles from "./Entry.module.sass";
import TextInput from "../../../components/TextInput";
import Image from "../../../components/Image";

const Entry = (props) => {
    return (
        <div className={styles.entry}>
            <div className={styles.body}>
                <TextInput
                    className={styles.field}
                    name="username"
                    type="text"
                    placeholder="User Name"
                    required
                    icon="mail"
                />
                <TextInput
                    className={styles.field}
                    name="email"
                    type="email"
                    placeholder="Your email"
                    required
                    icon="mail"
                />
                <TextInput
                    className={styles.field}
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    icon="lock"
                />
                <TextInput
                    className={styles.field}
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    required
                    icon="diamond"
                />
                <TextInput
                    className={styles.field}
                    name="date"
                    type="date"
                    placeholder="Date"
                    required
                    icon="expand"
                />
                <TextInput
                    className={styles.field}
                    name="classId"
                    type="text"
                    placeholder="Class"
                    required
                    icon="payment"
                />
                <button className={cn("button", styles.button)}>Sign Up</button>
            </div>
        </div>
    );
};

export default Entry;
