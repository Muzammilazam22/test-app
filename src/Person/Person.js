import React, { useEffect, useState } from "react";

import "./Person.css";

const Person = (props) => {
  const [name, setName] = useState("hi");
  useEffect(() => {
    setName(props.name);
  }, [props.name]);
  return (
    <div className="Person">
      <p onClick={props.onClick}>
        I'm {name} and I am {props.age} years old{" "}
      </p>
      <p>{props.children}</p>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
    </div>
  );
};
export default Person;

/* <p>
    {" "}
    I'm {props.name} and my age is {Math.floor(Math.random() * 25)} years
    old{" "}
  </p> */
