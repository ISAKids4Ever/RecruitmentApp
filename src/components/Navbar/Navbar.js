import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import firebase from '../../firebase';
import LOGO from '../Icons/LOGO.svg';
import SignInIcon from '../Icons/SignInIcon';
import LogOutIcon from '../Icons/LogOutIcon';

export function Navbar({ profile = false, logout = false, login = false }) {
    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.navLogo}>
                <img src={LOGO} alt="intervyou logo" />
            </Link>

            <div className={styles.navViewList}>
                <NavLink to="/testy" activeClassName={styles.navActive}>
                    Tests
                </NavLink>
                <NavLink to="/pytania" activeClassName={styles.navActive}>
                    Flashcards
                </NavLink>
                <NavLink to="/forum" activeClassName={styles.navActive}>
                    Forum
                </NavLink>
                {login && (
                    <NavLink to="/zaloguj" activeClassName={styles.navActive}>
                        <SignInIcon className={styles.loginIcon} />
                    </NavLink>
                )}
                {logout && (
                    <NavLink to="/" onClick={() => firebase.auth().signOut()}>
                        <LogOutIcon className={styles.loginIcon} />
                    </NavLink>
                )}
            </div>
        </nav>
    );
}
