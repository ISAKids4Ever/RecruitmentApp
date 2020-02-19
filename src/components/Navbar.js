import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import firebase from "../firebase";
import logo from "../images/logoSmallBlack.png";

function Navbar(props) {
  const { profile, logout, login } = props;
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLogo}>
        <Link to="/"><img src={logo} alt='intervyou logo'></img></Link>
      </div>
      
      <div id={styles.navViewList}>
        <ol>

          <li>
            <Link to="/testy">Testy</Link>
          </li>
          <li>
            <Link to="/pytania">Fiszki</Link>
          </li>
          <li>
            <Link to="/forum">Forum</Link>
          </li>
          {login && <li>
            <Link to="/zaloguj">Zaloguj się</Link>
          </li>}
          {profile && <li>
            <Link to="/view4">WIDOK 4</Link>
          </li>}
          {logout && <li>
            <button onClick={() => firebase.auth().signOut()}>Log out</button>
          </li>}
          
        </ol>
      </div>
    </nav>
  );
}

export default Navbar;
