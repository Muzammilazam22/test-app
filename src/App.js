//import React, { Component } from "react";

//NOW we import use state instead of Component

import React, { useState } from "react";
import "./App.css";
import person from "./Person/Person.js";
import Person from "./Person/Person.js";

// NOW WE WRITE OUR CODE AS FUNCTIONAL COMPONENT

const App = (props) => {
  const [personState, setPersons] = useState({
    persons: [
      { name: "Muzammil Azam", age: 24 },
      { name: "Ghassan", age: 24 },
      { name: "Muhammad Haris", age: 23 },
    ],
    otherState: "some other values",
  });

  const [otherState,setOtherState] = useState('some other value');



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
    console.log('was clicked! ');
    // DON'T DO THIS: this.state.persons[0].name ='Muzammil';
    setPersons({
      persons: [
        { name: "M  ", age: 24 },
        { name: "Muteeb", age: 24 },
        { name: "Muhammad Haris", age: 23 },
      ],
      otherState: personState.otherState,
    });
  };

  return (
    <div className="App">
      <h1>Hi, this is my first app in react</h1>
      <button onClick={switchNameHandler}>Switch Button</button>

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

      <person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
        />
        <Person name={personState.persons[1].name} age={personState.persons[1].age}>

          my Hobbies: Racing  


        </Person>

        <Person name={personState.persons[2].name} age={personState.persons[2].age}>

          my Hobbies: Racing  


        </Person>

          

     


    </div>
  );
};

export default App;
