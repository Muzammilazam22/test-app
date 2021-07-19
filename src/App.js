import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, this is my first app in react</h1>
        <Person name="Muzammil Azam" age="23" />
        <Person name="Muneeb Zubair " age="22" />
        <Person name="Abraham Peter " age="24" />
        <Person name= "Muzammil Azam" age="23"> My hobbies: Watch Seasons</Person>
      </div>
    );
  }
}
export default App;
