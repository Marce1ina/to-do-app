import React from "react";
import style from "./todoList.css";
import Todo from "./Todo";

const TodoList = ({ removeTodo, todoList }) => (
    <ul className={style.todoList}>
        {todoList.map(({ id, text }) => (
            <Todo key={id} id={id} text={text} remove={removeTodo} />
        ))}
    </ul>
);

export default TodoList;
