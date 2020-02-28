import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import firebase from "../../firebase";
import logo from "../../images/logoSmallBlack.png";

export function Navbar(props) {
  const { profile, logout, login } = props;
  return (
    <nav className={styles.navbar}>

      <div className={styles.navLogo}>
        <Link to="/"><img src={logo} alt='intervyou logo'></img></Link>
      </div>
      
      <div className={styles.navViewList}>
        <NavLink to="/testy" activeClassName={styles.navActive}>Testy</NavLink>
        <NavLink to="/pytania" activeClassName={styles.navActive}>Fiszki</NavLink>
        <NavLink to="/forum" activeClassName={styles.navActive}>Forum</NavLink>
        {login && <Link to="/zaloguj">Zaloguj się</Link>}
        {profile && <Link to="/view4">WIDOK 4</Link> }
        {logout && <button onClick={() => firebase.auth().signOut()}>Log out</button>}
      </div>
    </nav>
  );
}
