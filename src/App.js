import React, { Component } from "react";
import './App.css';

import RecipeForm from './components/RecipeForm';
import Recipes from './components/Recipes'

const API_KEY1 =   process.env.REACT_APP_RECIPE_KEY_1
const API_KEY2 =   process.env.REACT_APP_RECIPE_KEY_2
// const chicken = ;



class App extends Component{

  state={
    recipes :[]
  }

  //makes the call to the recipe api

  recipeGrab= async(e)=>{
    //logs out what is typed into the input field
    const recipeName = e.target.elements.recipeName.value;
    //prevents automatic page refresh
    e.preventDefault();

    const response = await fetch(
`https://api.edamam.com/search?q=${recipeName}&count=3&app_id=${API_KEY1}&app_key=${API_KEY2}`)


const results = await response.json();
let recipeArr = results.hits;
this.setState({recipes: recipeArr})
// results.map((item)=>{
  
// })
console.log(this.state.recipes)
  }

  render(){
    return(
      <div className ="App">
        <header className="App-header">
          <h1 className="app-title"> Recipe Friend</h1>
        </header>
        <RecipeForm recipeGrab = {this.recipeGrab} />
       <Recipes recipes ={this.state.recipes} />
            </div>
           
          

          )
        }
  }


export default App; 