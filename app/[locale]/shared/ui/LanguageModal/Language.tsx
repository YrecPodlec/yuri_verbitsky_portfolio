"use client"
import React from 'react';
import {useLocale} from "use-intl";
import {LOCALES} from "@/app/[locale]/shared/i18n/locales";
import Image from "next/image";
import styles from './language.module.scss'
const Language = () => {
    const locale = useLocale();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const flag = LOCALES[locale];
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