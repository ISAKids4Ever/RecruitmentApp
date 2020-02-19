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
      
      <div className={styles.navViewList}>
        
        <Link to="/testy">Testy</Link>
          
        <Link to="/pytania">Fiszki</Link>
          
        <Link to="/forum">Forum</Link>
          
        {login && <Link to="/zaloguj">Zaloguj się</Link>}
        
        {profile && <Link to="/view4">WIDOK 4</Link> }
        
        {logout && <button onClick={() => firebase.auth().signOut()}>Log out</button>}
        
      </div>

    </nav>
  );
}

export default Navbar;
