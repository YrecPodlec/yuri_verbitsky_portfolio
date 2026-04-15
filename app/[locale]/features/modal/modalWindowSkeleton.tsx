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
                <div className="window" style={{height:'100%', display:'flex', flexDirection:'column'}}>
                        <div className={styles.modalBar}>
                            <div className="title-bar-text">Modal Window</div>
                            <button className={styles.closeBtn} onClick={onClose}>X</button>
                        </div>
                    <div className="window-body" style={{flex: 1, overflow: 'auto', minHeight: 0, margin: 0, padding: ".5rem"}}>
                        {children}
                    </div>
                    <div className="status-bar">
                        <p className="status-bar-field" style={{fontSize: ".5rem"}}>Press F1 for help</p>
                        <p className="status-bar-field" style={{fontSize: ".5rem"}}>Slide 1</p>
                        <p className="status-bar-field" style={{fontSize: ".5rem"}}>CPU Usage: 14%</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ModalWindowSkeleton;