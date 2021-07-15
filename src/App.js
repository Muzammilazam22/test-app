// import logo from './logo.svg';
// import './App.css';

import React, { useState } from 'react';

const App = () => {
  const [value, setValue] = useState('10'); // default value 0
  
  const handleChange = (e) => setValue(e.target.value);
  
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
      />
      <p>{value}</p>
      <button onClick={()=> setValue("12300")}>Buy</button>
    </div>
  );
}

export default App;
