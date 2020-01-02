import React from 'react';
import {Link} from "react-router-dom"
import styles from './Navbar.module.css'


function Navbar() {
  return (
   <nav className={styles.navbar}>
       <div className={styles.navbarLeft}>LEWA</div>
       <div className={styles.navbarRight}>
<ul className={styles.viewList}>
    <li><Link to="/view1">WIDOK 1</Link></li>
    <li><Link to="/view2">WIDOK 2</Link></li>
    <li><Link to="/view3">WIDOK 3</Link></li>
    <li><Link to="/view4">WIDOK 4</Link></li>

</ul>
       </div>
   </nav>
  );
}

export default Navbar;