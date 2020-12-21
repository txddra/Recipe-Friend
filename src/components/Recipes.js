

import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css"


export const Recipes = (props) => {
    return (
    <div className = "container">
        <div className="row">
        {props.recipes.map((recipe)=>{
          return (
            <div key ={recipe.recipe.label} className = "col-md-4" style ={{marginBottom:"2rem"}}>
                <div className ="recipes__box">
            <img
            className="recipe__box-img" 
            src={recipe.recipe.image} 
            alt={recipe.recipe.label}/>
            <div className="recipe__text">

                <h5 className ="recipes__title">
                    {/* //if the length of the title is less than 20 characters, render the title as is, otherwise trim it to 25 characters */}
                    {recipe.recipe.label.length < 20 ? `${recipe.recipe.label}` : `${recipe.recipe.label.substring(0,25)}...`}
                    </h5>
                <p className ="recipes__subtitle">Publisher:</p>
                <span className ='publisher_text'>{recipe.recipe.source}</span>

            </div>
            <Link to= {`${recipe.recipe.label}`} className = "recipe_buttons"> View Recipe</Link>
                </div>
    </div>

);})
          } 
          </div>
          </div>

          )
}
export default Recipes;