import React from 'react';
import Navigation from "@/app/[locale]/features/navigation/navigation";
import {headerItems} from "@/app/[locale]/features";
import styles from "./header.module.scss";
import Link from "next/link";
import Language from "@/app/[locale]/shared/ui/LanguageModal/Language";
const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.navPanel}>
                <Link href="/">
                    <div className={styles.logoBox}>
                        <img src="/world-2.png" alt=""/>
                        <p style={{color: "white"}}>YURI VERBITSKY</p>
                    </div>
                </Link>
                <div className={styles.btnList}>
                    <Navigation items={headerItems}/>
                    <Language/>
                </div>
                {/* Бургер меню */}
                <label className={styles.burger}>
                    <input type="checkbox" className={styles.burgerCheckbox} />
                    <span className={`window ${styles.burgerIcon}`}>
                        <span></span>
                        <span></span>
                        <span>MENU</span>
                    </span>
                </label>
            </div>
        </header>
    );
};

export default Navbar;