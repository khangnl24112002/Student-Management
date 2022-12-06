import React, { useState } from "react";
import cn from "classnames";
import styles from "./SignIn.module.sass";
import { use100vh } from "react-div-100vh";
import { Link } from "react-router-dom";
import TextInput from "../../components/TextInput";
import Image from "../../components/Image";
import { usersServices } from "../../services/studentServices";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
    const heightWindow = use100vh();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        password: "",
    });
    const handleChange = (e) => {
        let value = e.target.value;
        console.log(e.target.name, e.target.value);

        setUser({
            ...user,
            [e.target.name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log(user);
            const data = await usersServices.login(user);
            console.log(data);
            localStorage.setItem("access_token", data.token);
            navigate("/home");
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <div className={styles.login} style={{ minHeight: heightWindow }}>
            <div className={styles.wrapper}>
                <div className={cn("h2", styles.title)}>Sign in</div>
                <div className={styles.body}>
                    <form
                        className={styles.description}
                        onSubmit={handleSubmit}
                    >
                        <TextInput
                            className={styles.field}
                            name="username"
                            type="text"
                            placeholder="User Name"
                            required
                            icon="mail"
                            handleChange={handleChange}
                        />
                        <TextInput
                            className={styles.field}
                            name="password"
                            type="password"
                            placeholder="Password"
                            required
                            icon="lock"
                            handleChange={handleChange}
                        />
                        <button className={cn("button", styles.button)}>
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
