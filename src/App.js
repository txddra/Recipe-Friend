import React, { Component } from "react";
import './App.css';

import RecipeForm from './components/RecipeForm'


class App extends Component{

  //makes the call to the recipe api

  recipeGrab=(e)=>{
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;

    console.log(recipeName)
  }

  render(){
    return(
      <div className ="App">
        <header className="App-header">
          <h1 className="app-title"> Recipe Friend</h1>
        </header>
        <RecipeForm recipeGrab = {this.recipeGrab} />
      </div>
    );
  }
}

export default App; 