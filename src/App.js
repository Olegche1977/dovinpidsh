import React, { Component } from 'react';
import Button from './button.js'
import logo from './bearing.svg';
import './App.css';

function App () {
  
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Vinpidshypnic !!!</h2>
        </div>

        <h2>Varya, Hellow !!!!!!!!</h2>
        {/* <img src='./ball-bearing1.webp' className="App-logo" alt="bearing" /> */}
        <Button/>

       
      </div>
    );
  
}

export default App;
