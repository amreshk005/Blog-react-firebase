import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./WorkPage.module.css";
import data from "../../data/data.json";
import { connect } from "react-redux";
import { fetchData } from "../../redux/action";

const WorkPage = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);
  return (
    <div className={style["work"]}>
      <div className={style["work-info"]}>
        <p>Currently part of engineering at Box8, a food-tech company, where I work as a frontend developer. My role comprises of building new features and improving the overall experience of the web platform.</p>
      </div>
      <hr />
      <h4 className={style["work-container-title"]}>FEW MORE</h4>
      <div className={style["work-container"]}>
        {data.map((e, index) => {
          return (
            <div key={index + Date.now()} className={style["work-card"]}>
              <h3>Audio Features Visualisation</h3>
              <p className={style["work-desc"]}>Visualisation of audio features using Spotify API. Built with node + react + chartjs</p>
              <div className={style["links-wrap"]}>
                <Link to="#">View Code</Link>
                <Link to="#">Live Demo</Link>
              </div>
            </div>
          );
        })}
      </div>

      <h3 style={{ marginTop: "8rem" }}>
        Find more on{" "}
        <Link to="https://github.com/amreshk005" style={{ textDecoration: "none", color: "#a568b0" }}>
          Github
        </Link>
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
