import React from "react";
import style from "./FrontPage.module.css";
import ProjectCard from "./ProjectCard/ProjectCard";

const FrontPage = (props) => {
  return (
    <div className={style["Front"]}>
      <header className={style["header"]}>
        <h1>
        Hi. I’m Anjali.  <br />
        A Digital Marketer, currently working as SEO executive.
        </h1>
      </header>
      <hr />
      <div className={style["project-container"]}>
        <h4 className={style["project-container-info"]} style={{ marginBottom: "20px", fontSize: "20px" }}>
          WORK
        </h4>
        <ProjectCard />
      </div>
    </div>
  );
};

export default FrontPage;
