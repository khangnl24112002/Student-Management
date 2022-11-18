import React, { useState } from "react";
import cn from "classnames";
import styles from "./Header.module.sass";
import { Link } from "react-router-dom";
import Icon from "../Icon";
import User from "./User";

const Header = ({ onOpen }) => {
    const [visible, setVisible] = useState(false);
    const handleClick = () => {
        onOpen();
        setVisible(false);
    };

    return (
        <header className={styles.header}>
            <button
                className={styles.burger}
                onClick={() => handleClick()}
            ></button>
            <button
                className={cn(styles.buttonSearch, {
                    [styles.active]: visible,
                })}
                onClick={() => setVisible(!visible)}
            >
                <Icon name="search" size="24" />
            </button>
            <div className={styles.control} onClick={() => setVisible(false)}>
                <Link className={cn("button", styles.button)} to="/sign-up">
                    <Icon name="add" size="24" />
                    <span>Create Account</span>
                </Link>

                <User className={styles.user} />
            </div>
        </header>
    );
};

export default Header;
