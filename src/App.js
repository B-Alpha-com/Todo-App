import React, { Component } from "react";
import "./App.css";
import { BsPlusSquare } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";
import { ImHome } from "react-icons/im";

import { GrTask } from "react-icons/gr";
import { FaRegRegistered } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";

import Header from "./Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      userTasks: [],
      splicedArray: [],
      taskDone: -1,
      display: false,
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
    this.setState({ taskDone: currentIndex });

    // if (currentIndex) {
    //   this.setState({ taskDone: currentIndex });
    //   if (this.state.taskDone === currentIndex) {
    //     this.setState({ taskDone: -1 });
    //   }
    // }
  };
  handleMouseOver = (e) => {
    this.setState({ display: true });
  };
  handleClick = (e) => {
    if (this.state.display === true) {
      this.setState({ display: false });
    }
  };
  componentDidMount() {
    fetch("https://od-api-demo.oxforddictionaries.com/api/v1/domains/en", {
      method: "GET",
    }).then((resp) => console.log(resp));
    // .then((data) => {
    //   const info = data;
    //   console.log(info);
    // })
  }

  // async function randomFacts() {
  //   const resp = await fetch("https://api.fungenerators.com", {
  //     GET: "fact/random",
  //   });
  //   const data = await resp.json();
  //   console.log(data);
  // }

  render() {
    const {
      handleInput,
      onAdd,
      handleRemoveTask,
      handleTaskDone,
      onKeypress,
      handleClick,
      handleMouseOver,
    } = this;
    const { value, userTasks, taskDone, display } = this.state;

    return (
      <div className="App">
        <Header handleMouseOver={(e) => handleMouseOver(e)} />
        <div
          className="sideBar"
          style={{
            display: display === true ? "block" : "none",
          }}
        >
          <ul className="link-ul">
            <li className="link-div">
              <ImHome className="icon" />
              Home
            </li>
            <li className="link-div">
              <GrTask className="tasks icon" />
              Tasks
            </li>
            <li className="link-div">
              <FaRegRegistered className="icon" />
              Register
            </li>
            <li className="link-div">
              <BiEdit className="icon" />
              Edit task
            </li>
          </ul>
        </div>
        <div className="master" onClick={(e) => handleClick(e)}>
          <div className="container">
            <div className="text-div">
              <h1 className="h1">Make a todo list</h1>
              <p className="text">
                completing
                <br /> your task is our joy
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
