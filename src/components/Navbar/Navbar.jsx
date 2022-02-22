import React from "react";
import styles from './Navbar.module.css'

function Navbar(props) {
  return (
    <div className={styles.navbar}>
      <span className={styles.logo}>Камень - Ножницы - Бумага</span>
      <span className={styles.wins}>
        <span>wins:</span> {props.wins}
      </span>
      <span className={styles.lose}>
        <span>lose:</span> {props.lose}
      </span>
    </div>
  );
}

export default Navbar;
