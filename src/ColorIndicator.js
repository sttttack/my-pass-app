import { useState } from "react";
import styles from "./ColorIndicator.module.css";

function ColorIndicator(props) {
  let box = styles.box;
  let box1 = styles.box1;
  let box2 = styles.box2;
  let box3 = styles.box3;
  let box4 = styles.box4;

  if (props.inputValue === 0) {
    box1 = styles.box;
    box2 = styles.box;
    box3 = styles.box;
    box4 = styles.box;
  } else if (props.inputValue < 5) {
    box1 = styles.box1;
    box2 = styles.box;
    box3 = styles.box;
    box4 = styles.box;
  } else if (props.inputValue <= 10) {
    box1 = styles.box2;
    box2 = styles.box2;
    box3 = styles.box;
    box4 = styles.box;
  } else if (props.inputValue <= 15) {
    box1 = styles.box3;
    box2 = styles.box3;
    box3 = styles.box3;
    box4 = styles.box;
  } else if (props.inputValue > 15) {
    box1 = styles.box4;
    box2 = styles.box4;
    box3 = styles.box4;
    box4 = styles.box4;
  }

  return (
    <div className={styles.section}>
      <div className={box1}></div>
      <div className={box2}></div>
      <div className={box3}></div>
      <div className={box4}></div>
    </div>
  );
}

export default ColorIndicator;
