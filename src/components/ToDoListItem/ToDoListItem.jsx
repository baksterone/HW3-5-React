import React from "react";
import "./ToDoListItem.scss";

class ToDoListItem extends React.Component {
  /*  state = {
    done: false,
  }; */

  toggleDone() {
    //this.state.done = true;

    /* this.setState((prevState) => {
      return {
        done: !prevState.done,
      };
    }); */
    this.props.onToggle();
  }

  toggleImportant(){
    this.props.onImportant();
  }

  removeHandler() {
    this.props.onDelete();
  }

  render() {
    const { message, done, important } = this.props;
    let classNameText = "task-text";

    if (done) {
      classNameText += " task_is_done";
    }

    if (important) {
      classNameText += " task_is_important";
    }

    return (
      <div className="task-item">
        <span className={classNameText} onClick={() => this.toggleDone()}>
          {message}
        </span>
        <div className="controls">
          <i className="fa fa-trash" onClick={() => this.removeHandler()} />
          <i className="fa fa-star" onClick={() => this.toggleImportant()} />
        </div>
      </div>
    );
  }
}

export default ToDoListItem;
