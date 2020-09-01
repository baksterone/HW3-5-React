import React from "react";
import Header from "./components/Header";
import InputSearch from "./components/InputSearch";
import TaskFilter from "./components/TaskFilter";
import ToDoList from "./components/ToDoList";
import CreateNewElement from "./components/CreateNewElement";
import Statistics from "./components/Statistics";

import "./app.scss";

class App extends React.Component {
  maxId = 100;
  state = {
    todolist: [
      { message: "Task 1", important: false, done: false, id: 1 },
      { message: "Task 2", important: false, done: false, id: 2 },
      { message: "Task 3", important: false, done: false, id: 3 },
    ],
    filterWord: "all_tasks",
    keyWord: ""
  };

  onDelete = (id) => {
    //console.log(id);
    this.setState((prevState) => {
      const todos = prevState.todolist.filter((todo) => {
        return todo.id !== id;
      });
      return {
        todolist: todos,
      };
    });
  };

  onAdded = (valueMessage) => {
    this.setState((prev) => {
      const addTodos = [
        ...prev.todolist,
        {
          message: valueMessage,
          important: false,
          done: false,
          id: ++this.maxId,
        },
      ];
      return {
        todolist: addTodos,
      };
    });
  };

  onToggle = (id) => {
    this.setState((prev) => {
      const todos = prev.todolist.map((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
        return todo;
      });
      return {
        todolist: todos,
      };
    });
  };

  onImportant = (id) => {
    this.setState((prev) => {
      const todos = prev.todolist.map((todo) => {
        if(todo.id === id){
          todo.important = !todo.important;
        }
        return todo;
      });
      return {
        todolist: todos,
      };
    });
  };

  filterTask = (filterWord) => {
    this.setState({filterWord});
  };

  filterFunc = (array, word) => {
    const filtered = array.filter((todo) => {
      switch (word){
        case "all_tasks":
          return todo;
        case "important_tasks":
          if(todo.important) return todo;
          else break;
        case "done_tasks":
          if(todo.done) return todo;
          else break;
        default:
          throw new Error ("no filter" + word);
      };
    });
    return filtered;
  };

  searchTask = (keyWord) => {
    this.setState({keyWord});
  }

  // importantFilter = () => {
  //   this.setState((prev) => {
  //     console.log(prev);
  //     const todos = prev.todolist.filter((todo) => {
  //       return todo.important === true;
  //     });
  //     return {
  //       todolist: todos,
  //     };
  //   });
  // };

  // doneFilter = () => {
  //   this.setState((prev) => {
  //     const todos = prev.todolist.filter((todo) => {
  //       return todo.done === true;
  //     });
  //     return {
  //       todolist: todos,
  //     };
  //   });
  // };

  render() {
    const { todolist, filterWord, keyWord } = this.state;
    const todosDone = todolist.filter((item) => item.done).length;
    const todosImportant = todolist.filter((item) => item.important).length;
    const todosActive = todolist.length - todosDone;
    const todoSearch = todolist.filter((todo) => {
      if(todo.message.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase()))
      return todo;
    });
    const todoFiltered = this.filterFunc(todoSearch, filterWord);

    return (
      <div className="wrapper">
        <Header />
        <hr />
        <InputSearch onSearch={this.searchTask}/>
        <TaskFilter 
          filterTask={this.filterTask}
        />
        <ToDoList
          todos={todoFiltered}
          onDelete={this.onDelete}
          onImportant={this.onImportant}
          onToggle={this.onToggle}
        />
        <CreateNewElement onAdded={this.onAdded} />
        <hr />
        <Statistics done={todosDone} active={todosActive} important={todosImportant}/>
      </div>
    );
  }
}

export default App;
