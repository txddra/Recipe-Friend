import React, { Component } from "react";
import './App.css';

import RecipeForm from './components/RecipeForm'

const API_KEY1 =  `b87d0857`
const API_KEY2 = `11bf59d067701580d54a3c72b5bd2161`;
// const chicken = ;



class App extends Component{

  //makes the call to the recipe api

  recipeGrab= async(e)=>{
    //logs out what is typed into the input field
    const recipeName = e.target.elements.recipeName.value;
    //prevents automatic page refresh
    e.preventDefault();

    const response = await fetch(
`https://api.edamam.com/search?q=chicken&app_id=${API_KEY1}&app_key=${API_KEY2}&from=0&to=3&calories=591-722&health=alcohol-free`)


const results = await response.json();
console.log(results)
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