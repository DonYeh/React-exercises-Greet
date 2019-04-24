import React from 'react';
// import logo from './logo.svg';
import './App.css';
import GreetLowercase from './greet-lowercase';
import GreetLeetSpeak from './greet-leetspeak2';
import GreetCaesar from './greet-caesar';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <GreetLowercase name="DoNaLd" />
        <GreetLeetSpeak name="alexander" />
        <GreetCaesar name="donald" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div >
  );
}

export default App;
