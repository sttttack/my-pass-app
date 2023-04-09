import React, { useEffect } from "react";
import "./App.css";
import "./index.css";
import { useState } from "react";
import styles from "./MainConteiner.module.css";
import Copy from "./images/copy.svg";
import ColorIndicator from "./ColorIndicator";

export default function MainConteiner() {
  const [inputValue, setInputValue] = useState(0);
  const [digits, setDigits] = useState(26);
  const [chars, setChars] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [diff, setDiff] = useState("");
  const [password, setPassword] = useState("");
  const passString = password.toString();
  const [copied, setCopied] = useState(false);

  const sliderChange = (event) => {
    setInputValue(event.target.value);
  };

  const getPassword = () => {
    let newPassword = "";
    let allChars = [
      upperCase ? uppercaseChars : "",
      lowerCase ? lowerChars : "",
      numbers ? numberChars : "",
      symbols ? symbolChars : "",
    ].join("");

    for (let i = 0; i < inputValue; i++) {
      let randomNumber = Math.floor(Math.random() * allChars.length);
      newPassword += allChars[randomNumber];
    }
    strengthFunction();
    setPassword(newPassword);
  };

  const handelClick = () => {
    const passGen = getPassword();
  };

  setTimeout(() => {
    setCopied(false);
  }, 5000);

  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const symbolChars = "!@#$%^&*()";
  const numberChars = "0123456789";

  const strengthFunction = () => {
    if (inputValue <= 5) {
      setDiff("TOO WEAK!");
    } else if (inputValue <= 10) {
      setDiff("WEAK");
    } else if (inputValue <= 15) {
      setDiff("MEDIUM");
    } else if (inputValue > 15) {
      setDiff("STRONG");
    }
  };

  const changeHandle = () => {
    if (!upperCase) {
      setChars(uppercaseChars);
      setUpperCase(true);
    } else if (upperCase) {
      setUpperCase(false);
      setChars(lowerChars);
    }
  };

  const changeHandleLowerCase = () => {
    if (!lowerCase) {
      setChars(lowerChars);
      setLowerCase(true);
    } else if (lowerCase) {
      setLowerCase(false);
      setChars(lowerChars);
    }
  };

  const changeHandleNumbers = () => {
    if (!numbers) {
      setNumbers(true);
      setDigits(10);
      setChars(numberChars);
    } else if (numbers) {
      setNumbers(false);
      setChars(lowerChars);
      setDigits(26);
    }
  };

  const changeHandleSymbols = () => {
    if (!symbols) {
      setSymbols(true);
      setChars(symbolChars);
      setDigits(10);
    } else if (symbols) {
      setSymbols(false);
      setChars(lowerChars);
      setDigits(26);
    }
  };

  return (
    <div className={styles.impt}>
      <p className={styles.title}>Password Generator</p>

      <div className={styles.conteiner}>
        <p className={styles.paragraph}>
          {inputValue === 0 ? (
            <p className={styles.pss}>P4$5W0rD!</p>
          ) : (
            password
          )}
        </p>
        <div className={styles.copyDiv}>
          <p className={styles.cop}>{copied === false ? "" : "COPIED"}</p>
          <img
            src={Copy}
            onClick={() => {
              navigator.clipboard.writeText(passString);
              setCopied(true);
            }}
          />
        </div>
      </div>
      <div className={styles.mainDiv}>
        <div className={styles.rangeDisplay}>
          <p>Character Length</p>
          <p>{inputValue}</p>
        </div>
        <input
          type="range"
          min="0"
          max="20"
          value={inputValue}
          onChange={sliderChange}
          className={styles.progress}
        />
        <div className={styles.checkbox}>
          <label className={styles.checkmarks}>
            <input
              type="checkbox"
              onChange={changeHandle}
              checked={upperCase}
            ></input>
            <span className={styles.checkmark}>Include Uppercase Letters</span>
          </label>
          <label className={styles.checkmarks}>
            <input
              type="checkbox"
              onChange={changeHandleLowerCase}
              checked={lowerCase}
            ></input>
            <span className={styles.checkmark}>Include Lowercase Letters</span>
          </label>
          <label className={styles.checkmarks}>
            <input
              type="checkbox"
              onChange={changeHandleNumbers}
              checked={numbers}
            ></input>
            <span className={styles.checkmark}>Include Numbers</span>
          </label>
          <label className={styles.checkmarks}>
            <input
              type="checkbox"
              onChange={changeHandleSymbols}
              checked={symbols}
            ></input>
            <span className={styles.checkmark}>Include Symbols</span>
          </label>
        </div>
        <div className={styles.strength}>
          <p>STRENGTH</p>

          <div className={styles.diff}>
            <p>{diff}</p>
            <ColorIndicator inputValue={inputValue} />
          </div>
        </div>

        <div className={styles.btn} onClick={handelClick}>
          <p className={styles.gen}>GENERATE</p>
        </div>
      </div>
    </div>
  );
}
