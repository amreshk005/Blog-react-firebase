import React from "react";
import style from "./About.module.css";
import { Link } from "react-router-dom";

const About = () => {
  let urlImage = "https://firebasestorage.googleapis.com/v0/b/mybuk960.appspot.com/o/portfolio-images%2FAnjali.jpeg?alt=media&token=748a09d9-6072-44e5-831b-55191dc98144";
  return (
    <div className={style["about"]}>
      <h1 className={style["about-title"]}>Hi! It's nice to meet you</h1>
      <div className={style["about-info"]}>
        {/* <div className={style["about-img"]}> */}
        <img className={style["about-img"]} src={urlImage} alt="Profile" />
        {/* </div> */}
        <div className={style["about-info-des"]}>
          <p>
          I’m Anjali (pronounced: AHN-juh-lee), a Digital Marketing Executive.

          </p>
          <p>I specialise in Search Engine Optimisation and Social Media Marketing. I’m passionate about internet/online marketing.

          </p>
          <p>
          I’m looking for an opportunity as a SEO and SMO executive where I will learn and implement my skills.
          </p>
       

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
