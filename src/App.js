import React, { Component } from "react";
import "./App.css";
import { BsPlusSquare } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";
import Header from "./Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      userTasks: [],
      splicedArray: [],
      taskDone: -1,
    };
  }
  handleInput = (e) => {
    const value = e.target.value;
    this.setState({ value });
    if (value.length > 2) {
    }
  };
  // onKeypress = (e) => {
  //   var key = e.key;
  //   console.log(key);
  //   if (e.keyCode > 9) {
  //     e.preventDefault();
  //   }
  // };
  onAdd = (e) => {
    const value = this.state.value;
    const user = this.state.userTasks;
    if (value.length > 0) {
      user.push(value);
      this.setState({ userTasks: user });
    }
    this.setState({ value: "" });
  };
  handleRemoveTask = (e, currentIndex) => {
    const newTask = this.state.userTasks;
    const splicedArray = newTask.splice(currentIndex, 1);
    this.state.splicedArray.push(splicedArray);
    this.setState({ userTasks: newTask });
  };
  handleTaskDone = (e, currentIndex) => {
    if (currentIndex) {
      this.setState({ taskDone: currentIndex });
      if (this.state.taskDone === currentIndex) {
        this.setState({ taskDone: -1 });
      }
    }
  };
  render() {
    const {
      handleInput,
      onAdd,
      handleRemoveTask,
      handleTaskDone,
      onKeypress,
    } = this;
    const { value, userTasks, taskDone } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="master">
          <div className="container">
            <div className="text-div">
              <h1 className="h1">Make a todo list</h1>
              <p className="text">
                completing
                <br /> your task is out joy
              </p>
            </div>
            <div className="inputDiv">
              <input
                type="text"
                className="input"
                placeholder="Add new task"
                onInput={(e) => handleInput(e)}
                value={value}
                // onKeyPress={(e) => onKeypress(e)}
              />
              <button
                type="button"
                className="btn-Add"
                onClick={(e) => onAdd(e)}
              >
                <BsPlusSquare className="bs-Icon" />
              </button>
            </div>
            <div>
              {userTasks.map((task, index) => {
                const currentIndex = index;
                return (
                  <div className="task-div">
                    <div
                      className="eachTask"
                      style={{
                        backgroundColor:
                          taskDone === index ? "red" : "darkslateblue",
                      }}
                    >
                      {task}
                    </div>
                    <div>
                      <button
                        onClick={(e) => handleTaskDone(e, currentIndex)}
                        className="btn-done"
                      >
                        <i>
                          <GiCheckMark className="check" />
                        </i>
                      </button>
                      <button
                        type="button"
                        className="remove-Btn"
                        onClick={(e) => handleRemoveTask(e, currentIndex)}
                      >
                        <i>
                          <ImCancelCircle className="remove" />
                        </i>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

//Create a userinput
//create a state that saves the userinput
//create the tasklist
//add and remove task
//check if task is completed
