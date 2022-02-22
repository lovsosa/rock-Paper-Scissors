import React from "react";
import cn from 'classnames'
import styles from "./game.module.css";

function GameItem(props) {
  
  return (
    <div onClick={props.click}>
      <img className={
        cn(styles.game__img, {[styles.active]: props.show})} src={`images/${props.image}.webp`} alt="#" />
    </div>
  );
}

export default GameItem;
