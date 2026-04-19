import React from 'react';
import styles from './Image98.module.scss'
import Image from "next/image";
interface IProps {
    image: string;
}
const Image98 = ({image}: IProps) => {
    return (
        <div className={styles.sectionImage}>
            <div className={`window ${styles.imageContainer}`}>
                <div className="title-bar">
                    <div className="title-bar-text">Web Developer</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div className="window-body">
                    <div className={styles.imagePaintContent}>
                        <div>
                            <button>SS</button>
                        </div>
                        <Image src={`/img/${image}`} alt={'Yuri Verbitsky web development'} width={95} height={95}/>
                    </div>
                    <div>
                        asjdjasnjdi
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Image98;