import React from "react";
import cn from "classnames";
import styles from "./SignIn.module.sass";
import { use100vh } from "react-div-100vh";
import { Link } from "react-router-dom";
import TextInput from "../../components/TextInput";
import Image from "../../components/Image";

const SignIn = () => {
    const heightWindow = use100vh();

    return (
        <div className={styles.login} style={{ minHeight: heightWindow }}>
            <div className={styles.wrapper}>
                <div className={cn("h2", styles.title)}>Sign in</div>
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
                        name="password"
                        type="password"
                        placeholder="Password"
                        required
                        icon="lock"
                    />
                    <button className={cn("button", styles.button)}>
                        Sign in
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
