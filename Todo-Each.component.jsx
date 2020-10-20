import React from "react";
import "./Todo-Each.style.css";

const TodoEach = (props) => {
  return (
    <div
      onClick={props.todoDone}
      className={!props.todo.dataStatus ? "" : "todo-list"}
    >
      {props.todo.formData}
    </div>
  );
};

export default TodoEach;
