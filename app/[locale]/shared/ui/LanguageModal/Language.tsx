"use client"
import React from 'react';
import {useLocale} from "use-intl";
import {LOCALES, Locale} from "@shared/i18n";
import Image from "next/image";
import styles from './language.module.scss'
const Language = () => {
    const locale = useLocale();
    const safeLocale = (locale in LOCALES ? locale : "en") as Locale;
    const flag = LOCALES[safeLocale];
    return (
        <div style={{cursor: 'pointer'}}>
            <button className={`${styles.language}`}>
                <p>
                    LANGUAGE
                </p>
                <Image src={`/lang/${flag.flag}.svg`} width={32} height={24} alt={flag.flag} />
            </button>
        </div>
    );
};

export default Language;