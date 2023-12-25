import React from "react";
import logo from './logo.svg';
import Main from "./containers/Main";
import { chosenTheme } from "./theme";
import './App.css';

function App() {  
  return (
    <div style={{background: chosenTheme.body}}>
      <Main />
    </div>
  );
}

export default App;
