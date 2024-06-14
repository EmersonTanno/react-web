import styles from './Header.module.css';

const Header = ({ titulo }: { titulo: string }) => {
    return <div className={styles.header}>{titulo}</div>;
};

export default Header;
