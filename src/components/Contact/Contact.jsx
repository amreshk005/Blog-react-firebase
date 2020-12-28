import React from "react";
import style from "./Contact.module.css";
import { Link } from "react-router-dom";

const Contact = (props) => {
  return (
    <div className={style["contact"] + (props.status && style["contact-dark"])}>
      <p>For work/project related, email me at- amreshk005 [AT] gmail [DOT] com</p>
      <p>
        Find me on LinkedIn{" "}
        <Link to="www.linkedin.com/in/amreshk005" style={{ textDecoration: "none", color: "#a568b0" }}>
          {" "}
          amreshk005
        </Link>
      </p>
      <p>
        Also on twitter{" "}
        <Link to="https://twitter.com/amreshk005" style={{ textDecoration: "none", color: "#a568b0" }}>
          {" "}
          @amreshk005
        </Link>
      </p>
    </div>
  );
};
export default Contact;
