import React from 'react';
import Navigation from "@/app/[locale]/features/navigation/navigation";
import styles from "./header.module.scss";
import Link from "next/link";
import Language from "@/app/[locale]/shared/ui/LanguageModal/Language";
import ModalWindow from "@/app/[locale]/features/modal/modalWindow";
import ChangeLang from "@/app/[locale]/features/ChangeLang/ChangeLang";
import {Model} from "@/app/[locale]/shared"
const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.navPanel}>
                <Link href="/">
                    <div className={styles.logoBox}>
                        <img src="/world-2.png" alt=""/>
                        <h5 style={{color: "white"}}>YURI_VERBITSKY.exe</h5>
                    </div>
                </Link>
                <label className={styles.burger}>
                    <input type="checkbox" className={styles.burgerCheckbox} />
                    <span className={`window ${styles.burgerIcon}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </label>

                <div className={styles.btnList}>
                    <Navigation items={Model.headerItems}/>
                    <ModalWindow button={<Language/>}>
                        <ChangeLang/>
                    </ModalWindow>
                </div>
            </div>
        </header>
    );
};

export default Navbar;