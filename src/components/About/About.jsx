import React from "react";
import style from "./About.module.css";
import { Link } from "react-router-dom";

const About = () => {
  let urlImage = "https://firebasestorage.googleapis.com/v0/b/mybuk960.appspot.com/o/portfolio-images%2Famresh_port.jpg?alt=media&token=d6600f1f-4d8e-487f-b2f0-498da880ab64";
  return (
    <div className={style["about"]}>
      <h1 className={style["about-title"]}>Hi! It's nice to meet you</h1>
      <div className={style["about-info"]}>
        {/* <div className={style["about-img"]}> */}
        <img className={style["about-img"]} src={urlImage} alt="Profile" />
        {/* </div> */}
        <div className={style["about-info-des"]}>
          <p>
            I'm Amresh, a frontend developer based in Bangalore, India. I focus on creating digital products with great user experience. These days I work at a food-tech company where my role comprises of building new features and improving
            the overall experience.
          </p>
          <p>I specialise in frontend development and design systems. I'm passionate about the web, design and everything at its intersection. I deeply care about inclusion and empathy</p>
          <p>I look forward for opportunities as a developer to create meaningful products.</p>
          <p>
            If you wish to work with me,{" "}
            <Link to="/contact" style={{ textDecoration: "none", color: "#a568b0" }}>
              contact me.
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
