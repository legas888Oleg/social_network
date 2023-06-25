import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo} src="https://www.freelogodesign.org/assets/img/home/icones/globe.svg" alt="logo"/>
        </header>
    );
}

export default Header;
