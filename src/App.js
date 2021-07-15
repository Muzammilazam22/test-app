// import logo from './logo.svg';
// import './App.css';

import React, { useState } from 'react';

const App = () => {
  const [value, setValue] = useState(); // put default value here () 
  
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
