import React from "react";
import style from "./title.css";

const Title = ({ tasksNumber }) => (
    <div>
        <h1 className={style.title}>To do</h1>
        <span className={style.tasksNumber}>{tasksNumber}</span>
    </div>
);

export default Title;
