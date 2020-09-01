import React, { Component } from "react";
import "./CreateNewElement.scss";

class CreateNewElement extends Component {
  state = {
    label: "",
  };

  onChange = (e) => {
    //console.log(e.target.value);
    this.setState({
      label: e.target.value,
    });
  };

  onAddedTask = (e) => {
    if(this.state.label.trim() !== ''){
      this.props.onAdded(this.state.label);
      this.setState({
        label: "",
      });
    } else{
      alert('empty task');
      this.setState({
        label: '',
      });
    }
    e.preventDefault();
  };

  render() {
    return (
      <form className="new-task" onSubmit={this.onAddedTask}>
        <input
          type="text"
          id="new-task-input"
          placeholder="Write down a new task..."
          value={this.state.label}
          onChange={this.onChange}
        />
        <button id="new-task-button">Add</button>
      </form>
    );
  }
}

export default CreateNewElement;
