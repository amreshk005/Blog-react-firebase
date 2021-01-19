import React from "react";
import style from "./Navbar.module.css";
import Toggle from "../Helper/Toggle";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  console.log("navbar", props);
  return (
    <div className={style.Navbar}>
      <div className={style.logoSection}>
        <Link to="/" className={style.logo}>
          <img style={{ maxHeight: "4rem", maxWidth: "5rem", padding: "15px" }} src={props.status ? "/image/anjali2.jpeg" : "/image/anjali1.jpeg"} alt="logo" />
        </Link>
      </div>
      <div className={style.infoSection}>
        <div className={props.status ? style.infoDark : style.info}>
          <ul style={{margin:"120px"}} >
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            {/* <li>
              <Link to="/about">About</Link>
            </li> */}
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {/* <li>
              <Toggle {...props} />
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
