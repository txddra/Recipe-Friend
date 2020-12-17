import React, { Component } from "react";
import './App.css';

import RecipeForm from './components/RecipeForm'


class App extends Component{
  render(){
    return(
      <div className ="App">
        <header className="App-header">
          <h1 className="app-title"> Recipe Friend</h1>
        </header>
      </div>
    );
  }
}

export default App; 