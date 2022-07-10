import React from 'react';
import styles from '../styles/Spinner.module.css'

const Spinner = () => {
    return (
        <div className={styles.spinContainerP} >
            <div className={styles.spinContainer}>
                <div className={styles.spin} id={styles.loader}></div>
                <div className={styles.spin} id={styles.loader2}></div>
                <div className={styles.spin} id={styles.loader3}></div>
                <div className={styles.spin} id={styles.loader4}></div>
                <span id={styles.text}>LOADING..</span>
            </div>
        </div>
    )
}

export default Spinner