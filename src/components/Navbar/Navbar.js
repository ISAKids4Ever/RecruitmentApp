import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import firebase from '../../firebase';
import logo from '../../images/logoSmallBlack.png';

export function Navbar({ profile = false, logout = false, login = false }) {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navLogo}>
				<Link to="/">
					<img src={logo} alt="intervyou logo" />
				</Link>
			</div>

			<div className={styles.navViewList}>
				<NavLink to="/testy" activeClassName={styles.navActive}>
					Testy
				</NavLink>
				<NavLink to="/pytania" activeClassName={styles.navActive}>
					Fiszki
				</NavLink>
				<NavLink to="/forum" activeClassName={styles.navActive}>
					Forum
				</NavLink>
				{login && (
					<NavLink to="/zaloguj" activeClassName={styles.navActive}>
						Zaloguj się
					</NavLink>
				)}
				{profile && (
					<NavLink to="/view4" activeClassName={styles.navActive}>
						WIDOK 4
					</NavLink>
				)}
				{logout && <button onClick={() => firebase.auth().signOut()}>Log out</button>}
			</div>
		</nav>
	);
}
