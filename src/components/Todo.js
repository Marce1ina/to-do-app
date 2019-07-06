import React from "react";
import style from "./todo.css";

const Todo = ({ remove, id, text }) => (
    <li className={style.todo}>
        <span className={style.todo_text}>{text}</span>
        <span className={style.todo_remove} onClick={() => remove(id)}>
            <i className="fas fa-check" />
        </span>
    </li>
);

export default Todo;
