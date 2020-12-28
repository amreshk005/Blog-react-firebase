import React from "react";
import style from "./Toggle.module.css";

const Toggle = (props) => {
  console.log(props);
  const handleCick = () => {
    props.handleChange();
  };
  return (
    <label htmlFor="toggle">
      <input type="checkbox" id="toggle" onClick={handleCick} />
      {/* <h2 className={style["label"]} data-dark="Dark mode" data-light="Light mode">
        Dark Mode
      </h2> */}
      <div className={style["switch"]}>
        <span className={style["knob"]}></span>
        <span className={style["moon"]}></span>
        <span className={style["sun"]}></span>
      </div>
      <div className={style["overlay"]}></div>
    </label>
  );
};

export default Toggle;
