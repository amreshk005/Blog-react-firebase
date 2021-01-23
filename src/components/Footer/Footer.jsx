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
                <Link to="/" target="_blank" rel="noopener noreferrer">
                  Twitter
                </Link>
              </li>
              <li>
                <Link to="/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link to="https://medium.com/@onlinetales" target="_blank" rel="noopener noreferrer">
                  medium
                </Link>
              </li>
            </ul>
          </div>
          <div className={style["Footer-image"]} style={{ width: "140px" }}>
            <img style={{ borderRadius: "50%"}} src={ "/image/angli12.jpeg"} alt="dev" />
          </div>
        </div>
        <small style={{ paddingLeft: "10px" }}>© 2020 Copyright Anjali . All rights reserved.</small>
      </div>
    </footer>
  );
};
