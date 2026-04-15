import React from 'react';
import {i18n} from "@/app/[locale]/shared";
import Link from "next/link";
import styles from './languageChange.module.scss'
import Image from "next/image";

const ChangeLang = () => {
    return (
        <section className={styles.section}>
            {Object.entries(i18n.LOCALES).map(([code, data]) => (
                <Link key={code} href={`/${code}`} className={styles.btnBody}>
                    <span>{data.label}</span>
                    <Image src={`/lang/${data.flag}.svg`} width={32} height={24} alt={data.label} />
                </Link>
            ))}
        </section>
    );
};

export default ChangeLang;