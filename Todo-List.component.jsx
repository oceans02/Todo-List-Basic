import React, { Component } from "react";
import TodoForm from "./Todo-Form.component";
import TodoEach from "./Todo-Each.component";

export default class TodoList extends Component {
  //store list of all to-dos
  state = {
    allTodo: []
  };

  //adding new to-do data to the state
  newTodos = (todo) => {
    const currentTodo = [todo, ...this.state.allTodo];
    this.setState({
      allTodo: currentTodo
    });
  };

  //update state as per todo click
  taskDoneHandler = (todoId) => {
    this.setState({
      allTodo: this.state.allTodo.map((eachTodo) => {
        if (eachTodo.id === todoId) {
          return {
            id: eachTodo.id,
            formData: eachTodo.formData,
            dataStatus: !eachTodo.dataStatus
          };
        } else {
          return eachTodo;
        }
      })
    });
  };

  render() {
    return (
      <div>
        <h1>ToDo List</h1>
        <TodoForm onFormSubmit={this.newTodos} />

        {this.state.allTodo.map((eachTodo) => (
          <TodoEach
            key={eachTodo.id}
            todo={eachTodo}
            todoDone={() => this.taskDoneHandler(eachTodo.id)}
          ></TodoEach>
        ))}
      </div>
    );
  }
}
