import React from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";

export const Footer = (props) => {
  console.log(props);

  return (
    <footer>
      <div className={style["Footer"]}>
        <div className={style["Footer-wrap"]}>
          <div className={style["Footer-info"] + " " + (props.status ? style["Footer-dark"] : style["Footer-light"])}>
            <ul>
              <li>
                <a href="https://twitter.com/onlinetales_" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
              <li>
                <Link to="/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </Link>
              </li>
              <li>
                <a href="https://medium.com/@onlinetales" target="_blank" rel="noopener noreferrer">
                  medium
                </a>
              </li>
            </ul>
          </div>
          <div className={style["Footer-image"]} style={{ width: "140px" }}>
            <img style={{ borderRadius: "50%"}} src={ "/image/angali121.jpeg"} alt="dev" />
          </div>
        </div>
        <small style={{ paddingLeft: "10px" }}>© 2020 Copyright Anjali . All rights reserved.</small>
      </div>
    </footer>
  );
};
