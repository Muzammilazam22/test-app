import React from "react";
//import Person from './Person/Person';
import Person from "./Components/Persons/Person/Person.js";

const persons = (props) =>
  props.persons.map((person, index) => {
    return (
      <Person
        onClick={(event) => props.clicked(index)}
        //console.log(event);

        name={person.name}
        age={person.age}
        key={person.id}

        changed={(event)=> props.changed(event,person.id)}

      />
    );
  });

export default persons;
