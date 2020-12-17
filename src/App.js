import React, { Component } from "react";
import './App.css';

import RecipeForm from './components/RecipeForm'

const API_KEY1 =  `b87d0857`
const API_KEY2 = `11bf59d067701580d54a3c72b5bd2161`;
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
        {this.state.recipes.map((recipe)=>{
          return (
            <div>
              <img src={recipe.recipe.image} alt={recipe.recipe.label}/>
               <p key ={recipe.recipe.label}>{recipe.recipe.label}</p>
            </div>
           
          

          )
        })}
      </div>
    );
  }
}

export default App; 