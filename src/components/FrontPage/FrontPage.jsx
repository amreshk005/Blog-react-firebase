import React from "react";
import style from "./FrontPage.module.css";
import ProjectCard from "./ProjectCard/ProjectCard";

const FrontPage = (props) => {
  return (
    <div className={style["Front"]}>
      <header className={style["header"]}>
        <h1 style={{fontFamily:"cursive"}} >
        Hi. I’m Anjali.  <br />
        A Digital Marketer, currently working as SEO executive.
        </h1>
      </header>
      <hr />
      <div className={style["project-container"]}>
        <h2 className={style["project-container-info"]} style={{ marginBottom: "20px", fontSize: "30px" }}>
         MY WORK
        </h2>
        <ProjectCard />
      </div>
    </div>
  );
};

export default FrontPage;
