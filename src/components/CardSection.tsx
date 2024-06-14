import React from 'react';
import styles from './CardSection.module.css';

const CardSection = ({ titulo, children }: { titulo: string; children: React.ReactNode }) => {
    return (
        <div className={styles.cardSection}>
            <div className={styles.cardTitle}>{titulo}</div>
            <div>{children}</div>
        </div>
    );
};

export default CardSection;
