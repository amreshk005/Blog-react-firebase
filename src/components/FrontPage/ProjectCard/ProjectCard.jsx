import React from "react";
import style from "./ProjectCard.module.css";
import data from "../../../data/data.json";

const ProjectCard = () => {
  //   console.log(data);
  let filterSelected = data.filter((e) => e.selected === true);

  return (
    <>
      {filterSelected.map((e, index) => {
        return (
          <div key={index} className={style[(index + 1) % 2 === 0 ? "project-card-reverse" : "project-card"]}>
            <div className={style["project-image"]}>
              <img src={e.image} style={{ maxWidth: "100%" , border:"1px solid #000" }} alt="new" />
            </div>
            <div className={style["project-info"]}>
            <h3>{e.contentType}</h3>
              <h2>{e.name}</h2>
              <p style={{ fontSize: "medium" }}>{e.des}</p>
              <a href={e.link}>
                {e.buttonText}
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default ProjectCard;
