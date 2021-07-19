import React from "react";
const person = (props) => {
  return (
    <div>
      <p>
        {" "}
        I'm {props.name} and my age is {Math.floor(Math.random() * 25)} years
        old{" "}
      </p>
      <p>{props.children}</p>
    </div>
  );
};
export default person;