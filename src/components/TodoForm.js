import React from "react";
import style from "./todoForm.css";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ""
        };
    }

    addTodo = () => {
        const { value } = this.state;
        value && this.props.addTodo(value);
        this.setState({ value: "" });
    };

    render = () => {
        const { value } = this.state;

        return (
            <div className={style.todoForm}>
                <input
                    className={style.todoForm_input}
                    type="text"
                    value={value}
                    onChange={e => this.setState({ value: e.target.value })}
                />
                <div className={style.todoForm_button} type="submit" onClick={this.addTodo}>
                    <i className="fas fa-plus" />
                </div>
            </div>
        );
    };
}

export default TodoForm;
