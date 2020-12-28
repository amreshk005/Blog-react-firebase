import React from "react";
import style from "./Blog.module.css";

const Blog = () => {
  return (
    <div className={style["blog-container"]}>
      <div className={style["blog-column"]}>
        <div className={style["blog-card"]}>
          <p>Decemeber 31,2019</p>
          <h2>2019 Year In Review</h2>
          <p>Life in 2019</p>
        </div>
        <div className={style["blog-card"]}>
          <p>Decemeber 31,2019</p>
          <h2>2019 Year In Review</h2>
          <p>Life in 2019</p>
        </div>
      </div>
      <div className={style["blog-tags"]}>
        <p>#accessibility(1)</p>
        <p>#accessibility(1)</p>
      </div>
    </div>
  );
};
export default Blog;
