// import logo from './logo.svg';
// import './App.css';

import React, { useEffect, useState } from "react";

const App = () => {
  const [value, setValue] = useState(""); // put default value here ()

  useEffect(() => {
    console.log("do a task when the variable value changes");
  }, [value]);

  const handleChange = (e) => setValue(e.target.value);

  const add = (a, b) => {
    a++;
    b--;
    return a + b + 1;
  };
  const a = add(2, 5);
  console.log("a", a);

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>{value ? value : "empty"}</p>
      <button onClick={() => setValue("Muzammil Azam")}>Buy</button>
    </div>
    //console.Log("Empty");
  );
};

export default App;
