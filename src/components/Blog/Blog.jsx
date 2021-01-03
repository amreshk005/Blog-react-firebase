import React, { useEffect } from "react";
import style from "./Blog.module.css";
import { connect } from "react-redux";
import { fetchData } from "../../redux/action";

const Blog = (props) => {
  let data = Object.keys(props.data);
  console.log(data);
  useEffect(() => {
    props.fetchData();
  }, []);
  return (
    <div className={style["blog-container"]}>
      <div className={style["blog-column"]}>
        {!data.length ? (
          <div>Loading...</div>
        ) : (
          data.map((e) => (
            <div className={style["blog-card"]}>
              <p>{props.data[e].Date}</p>
              <h2>{props.data[e].Heading}</h2>
              <p>{props.data[e].Content}</p>
            </div>
          ))
        )}
      </div>
      <div className={style["blog-tags"]}>
        <p>#accessibility(1)</p>
        <p>#accessibility(1)</p>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
