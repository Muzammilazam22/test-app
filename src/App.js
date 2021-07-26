//import React, { Component } from "react";

//NOW we import use state instead of Component

import React, { useState } from "react";
import "./App.css";
import person from "./Person/Person.js";
import Person from "./Person/Person.js";

// NOW WE WRITE OUR CODE AS FUNCTIONAL COMPONENT

const App = (props) => {
  const style = {
    width: "60%",
    margin: "auto",
    border: "1px solid #aea",
    boxShadow: "0 2px 3px #ccc",
    padding: "16px",
    textAlign: "center",
  };

  const persons=[
    { name: "Muzammil Azam", age: 24 },
    { name: "Ghassan", age: 24 },
    { name: "Muhammad Haris", age: 23 },
  ];
  const [showPersons, setShowPersons] = useState(true);

  // const [state, setState] = useState({
  //   persons: [
  //     { name: "Muzammil Azam", age: 24 },
  //     { name: "Ghassan", age: 24 },
  //     { name: "Muhammad Haris", age: 23 },
  //   ],
  //   otherState: "some other values",
  //   showPersons: true,
  // });

  //const [otherState, setOtherState] = useState("some other value");

  // class App extends Component {
  //   // var something =someValue;

  //   state = {
  //     persons: [
  //       { name: "Muzammil Azam", age: 24 },
  //       { name: "Muteeb", age: 24 },
  //       { name: "Muhammad Haris", age: 23 },
  //     ],
  //     otherState: 'some other values'
  //   };
  //   switchNameHandler = () => {

  //       //console.log('was clicked! ');
  //       // DON'T DO THIS: this.state.persons[0].name ='Muzammil';
  //       this.setState({
  //         persons: [
  //         { name: "Muzammil", age: 24 },
  //         { name: "Muteeb", age: 24 },
  //         { name: "Muhammad Haris", age: 23 },
  //       ]
  //       } )

  //   }

  // THERE IS NO RENDER METHOD IN FUNCTIONAL COMPONENT ONLY RETURN

  //   render() {
  //     return (
  //       <div className="App">
  //         <h1>Hi, this is my first app in react</h1>
  //         <button onClick={this.switchNameHandler}>Switch Button</button>

  //         {/* <Person name="Muzammil Azam" age="23" />
  //         <Person name="Muneeb Zubair " age="22" />
  //         <Person name="Abraham Peter " age="24" />
  //         <Person name="Muzammil Azam" age="23">
  //           {" "}
  //           My hobbies: Watch Seasons
  //         </Person> */}
  //         <person
  //           name={this.state.persons[0].name}
  //           age={this.state.persons[0].age}
  //         />
  //         <person
  //           name={this.state.persons[1].name}
  //           age={this.state.persons[1].age}
  //         />
  //         <person
  //           name={this.state.persons[2].name}
  //           age={personState.persons[2].age}
  //         />
  //       </div>
  //     );
  //   }
  // }

  const switchNameHandler = () => {
    console.log("was clicked! ");
    // DON'T DO THIS: this.state.persons[0].name ='Muzammil';
    console.log("state.persons[0].age", persons[0].age);
    // setState({
    //   persons: [
    //     { name: "M  ", age: state.persons[0].age + 1 },

    //     { name: "Muneeb zubair", age: state.persons[1].age + 1 },
    //     { name: "Muhammad Haris", age: 23 },
    //   ],
    //   otherState: state.otherState,
    //   showPersons: state.showPersons,
    // });
  };

  const togglePersonHandler = () => {
    const doesShow = showPersons;
    setShowPersons(!doesShow);
    // setState({
    //   persons: { ...state.persons },
    //   showPersons: !doesShow,
    //   otherState: "ji",
    // });
  };

  // Alternative Method
  // const togglePersonHandler = () =>
  //   setState({ showPersons: !state.showPersons });

  return (
    <div className="App">
      <h1>Hi, this is my first app in react</h1>

      <button style={style} onClick={togglePersonHandler}>
        Switch Button.
      </button>

      {/* <Person name="Muzammil Azam" age="23" />
      <Person name="Muneeb Zubair " age="22" />
      <Person name="Abraham Peter " age="24" />
      <Person name="Muzammil Azam" age="23">
        {" "}
        My hobbies: Watch Seasons
      </Person>
      <person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      />
      <person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
      />
      <person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
      /> */}
      {showPersons ? (
        <div>
          <person name={persons[0].name} age={persons[0].age} />
          <Person
            name={persons[1].name}
            age={persons[1].age}
            click={switchNameHandler}
          >
            my Hobbies: Racing
          </Person>

          <Person name={persons[2].name} age={persons[2].age}>
            my Hobbies: Racing
          </Person>
        </div>
      ) : null}
    </div>
  );
};

export default App;
