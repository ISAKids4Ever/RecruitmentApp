import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import firebase from '../../firebase';
import LOGO from '../Icons/LOGO.svg';
import SignInIcon from '../Icons/SignInIcon';
import LogOutIcon from '../Icons/LogOutIcon';

import * as ROUTES from '../../constants/routes';

export function Navbar({ profile = false, logout = false, login = false }) {
    return (
        <nav className={styles.navbar}>
            <Link to={ROUTES.HOME} className={styles.navLogo}>
                <img src={LOGO} alt="intervyou logo" />
            </Link>

            <div className={styles.navViewList}>
                <NavLink to={ROUTES.TESTS} activeClassName={styles.navActive}>
                    Tests
                </NavLink>
                <NavLink to={ROUTES.FLASHCARDS} activeClassName={styles.navActive}>
                    Flashcards
                </NavLink>
                <NavLink to={ROUTES.FORUM} activeClassName={styles.navActive}>
                    Forum
                </NavLink>
                {login && (
                    <NavLink to={ROUTES.LOGIN} activeClassName={styles.navActive}>
                        <SignInIcon className={styles.loginIcon} />
                    </NavLink>
                )}
                {profile && (
                    <NavLink
                        to={ROUTES.PROFILE}
                        onClick={() => firebase.auth().signOut()}
                    >
                        <SignInIcon className={styles.loginIcon} />
                    </NavLink>
                )}
                {logout && (
                    <NavLink to={ROUTES.HOME} onClick={() => firebase.auth().signOut()}>
                        <LogOutIcon className={styles.loginIcon} />
                    </NavLink>
                )}
            </div>
        </nav>
    );
}
