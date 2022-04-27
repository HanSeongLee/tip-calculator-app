import React from 'react';
import styles from './style.module.scss';
import Container from '../Container';
import Logo from '../Logo';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <Logo />
            </Container>
        </header>
    );
};

export default Header;
