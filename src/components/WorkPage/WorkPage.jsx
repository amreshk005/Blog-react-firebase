import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./WorkPage.module.css";
import data from "../../data/Work.json";
import { connect } from "react-redux";
import { fetchData } from "../../redux/action";

const WorkPage = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);
  return (
    <div className={style["work"]}>
      <div className={style["work-info"]}>
        <p>Currently working as SEO executive. My role comprises of improving overall (On-page, Off-page and technical) SEO activity of the website.</p>
      </div>
      <hr />
      <h4 className={style["work-container-title"]}>Selected projects I have worked on...
</h4>
<h2 className={style["project-container-info"]} style={{ marginBottom: "20px", fontSize: "30px" }}>
         Blog Writting
        </h2>
      <div className={style["work-container"]}>
        {data.map((e, index) => {
          return (
            <div key={index + Date.now()} className={style["work-card"]}>
              <h3>{e.name}</h3>
              <p className={style["work-desc"]}>{e.des}</p>
              <div className={style["links-wrap"]}>
                <a href={e.link}>{e.buttonText}</a>
                {/* <Link to="#">Live Demo</Link> */}
              </div>
            </div>
          );
        })}
      </div>

      <h3 style={{ marginTop: "8rem" }}>
        Find more on{" "}
        <a href="https://medium.com/@onlinetales" style={{ textDecoration: "none", color: "#a568b0" }}>
          Medium
        </a>
      </h3>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData()),
  };
};
const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkPage);
