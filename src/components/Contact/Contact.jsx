import React from "react";
import style from "./Contact.module.css";
import { Link } from "react-router-dom";

const Contact = (props) => {
  return (
    <div className={style["contact"] + (props.status && style["contact-dark"])}>
      <p>For work/project related, email me at- anjali.oct11 [AT] gmail [DOT] com
</p>
      <p>
      Find me on LinkedIn :
        <Link to="www.linkedin.com/in/anjali-k-b622591bb" style={{ textDecoration: "none", color: "#a568b0" }}>
          {" "}
          anjali-k-b622591bb
        </Link>
      </p>
    </div>
  );
};
export default Contact;
