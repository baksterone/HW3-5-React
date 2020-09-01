import React from "react";

import "./TaskFilter.scss";

const RESET = {
  All: "all_tasks",
  Important: "important_tasks",
  Done: "done_tasks"
}

class TaskFilter extends React.Component {
  state = {...RESET, All: "all_tasks checked"};

  filterToggle = ({target: {className}}) => {
    for(const key in RESET){
      if(className.includes(RESET[key])){
        const temp = RESET[key];
        this.props.filterTask(temp);
        this.setState({...RESET, [key]: `${temp} checked`})
      }
    }
  };

  render() {
    const btnArr = [];
    for(const key in this.state){
    btnArr.push(<button className={this.state[key] + " filters_item"}>{key}</button>)
    }
    return (
      <div id="filters" onClick={this.filterToggle}>
        {/* <span className="filters_item" id="all_tasks">
          All
        </span>
        <span className="filters_item" id="important_tasks" onClick={() => this.importantFilter()}>
          Important
        </span>
        <span className="filters_item" id="done_tasks" onClick={() => this.doneFilter()}>
          Done
        </span> */}

        {btnArr}
      </div>
    );
  }
}

export default TaskFilter;
