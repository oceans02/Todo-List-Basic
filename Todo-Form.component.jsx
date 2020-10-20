import React, { Component } from "react";

export default class TodoForm extends Component {
  state = {
    formInput: "",
    id: 1
  };

  //copy data from the input field
  changeHandler = (data) => {
    this.setState({
      formInput: data.target.value
    });
  };

  //form submission
  submitHandler = (form) => {
    form.preventDefault();

    this.setState({
      id: this.state.id + 1
    });

    this.props.onFormSubmit({
      id: this.state.id,
      formData: this.state.formInput,
      dataStatus: false
    });

    //clear data after form submission
    this.setState({
      formInput: ""
    });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.formInput}
          onChange={this.changeHandler}
        />
        <button type="submit" onClick={this.submitHandler}>
          Add
        </button>
      </form>
    );
  }
}
