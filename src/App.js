// import logo from './logo.svg';
// import './App.css';

import React, { useEffect, useState } from 'react';

const App = () => {
  const [value, setValue] = useState(); // put default value here () 
  
  useEffect(() => {
    console.log("do a task when the component loads");
  }, []);

  const handleChange = (e) => setValue(e.target.value);
  
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
      />
      <p>{value?value:"empty"}</p>
      <button onClick={()=> setValue("12300")}>Buy</button>
    </div>
  );
}

export default App;
