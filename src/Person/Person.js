import React, { useEffect, useState } from "react";
import Radium from "radium";

import "./Person.css";

const Person = (props) => {
  const [name, setName] = useState("hi");
  useEffect(() => {
    setName(props.name);
  }, [props.name]);

  // const person = (props) => {
  //   const style = {
  //     "@media (min-width: 500px)": {
  //       width: "450px",
  //     },
  //   };
  // };

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

export default Radium(Person);
