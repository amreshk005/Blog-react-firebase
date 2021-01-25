import React from "react";
import style from "./ProjectCard.module.css";
import data from "../../../data/data.json";
import { Link } from "react-router-dom";
import Blog from "../../../data/Blog.json";

const ProjectCard = () => {
  //   console.log(data);
  let filterSelected = data.filter((e) => e.selected === true);
  let filterSelecte = Blog.filter((e) => e.selected === true);

  return (
    <>
      {filterSelected.map((e, index) => {
        return (
          <div key={index} className={style[(index + 1) % 2 === 0 ? "project-card-reverse" : "project-card"]}>
            <div className={style["project-image"]}>
              <img src={e.image} style={{ maxWidth: "100%" , border:"1px solid #000" }} alt="new" />
            </div>
            <div className={style["project-info"]}>
            <h2>{e.contentType}</h2>
              <h2>{e.name}</h2>
              <p style={{ fontSize: "medium" }}>{e.des}</p>
              <a href={e.link}>
                {e.buttonText}
              </a>
            </div>
          </div>

        );
      })}
        <h2 className={style["project-container-info"]} style={{ marginBottom: "20px", fontSize: "30px" }}>
         MY BLOG
        </h2>


        {filterSelecte.map((e, index) => {
        return (
          <div key={index} className={style[(index + 1) % 2 === 0 ? "project-card-reverse" : "project-card"]}>
            <div className={style["project-image"]}>
              <img src={e.image} style={{ maxWidth: "100%" , border:"1px solid #000" }} alt="new" />
            </div>
            <div className={style["project-info"]}>
            <h2>{e.contentType}</h2>
              <h2>{e.name}</h2>
              <p style={{ fontSize: "medium" }}>{e.des}</p>
              <a href={e.link}>
                {e.buttonText}
              </a>
            </div>
          </div>

        );
      })}
 
      <h2 className={style["project-container-info"]} style={{ marginBottom: "20px", fontSize: "30px" }}>
         You can also view my written  
         <a href="https://medium.com/@onlinetales" ><span style={{color:"#a568b0", margin:"4px", textDecoration: 'none'}} > Blogs</span></a>

           and past <Link to="/work" ><span style={{color:"#a568b0"}} > works</span></Link>  here.
        </h2>
    </>
  );
};
export default ProjectCard;
