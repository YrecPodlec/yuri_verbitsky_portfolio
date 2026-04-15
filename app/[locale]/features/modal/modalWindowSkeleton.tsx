"use client"
import React, {ReactNode, useEffect} from 'react';
import styles from './modalWindow.module.scss'
interface Props {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
}
const ModalWindowSkeleton = ({ open, onClose, children }: Props) => {
    useEffect(() => {
        const closeOnEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", closeOnEsc);
        return () => document.removeEventListener("keydown", closeOnEsc);
    }, [onClose]);

    return (
        <section className={`${styles.overlay} ${open ? styles.open : ""}`} onClick={onClose}>
            <div className={`${styles.modal} ${open ? styles.open : ""}`} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </section>
    );
};

export default ModalWindowSkeleton;