// import logo from './logo.svg';
// import './App.css';
// // test commit
// function App() {
//   return (
//     <div className="App">
//      <h1>Hello world</h1>
//     </div>
//   );
// }
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = { value: '0' };
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <p>{this.state.value}</p>
        <button onClick={()=>{this.setState({ value: "12300" })}}>Buy</button>


      </div>
    );
  }
}


export default App;
