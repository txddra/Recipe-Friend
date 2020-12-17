

import React from 'react'

export const Recipes = (props) => {
    return (
    <div className = "container">
        <div className="row">
        {props.recipes.map((recipe)=>{
          return (
            <div key ={recipe.recipe.label} className = "col-md-4">
                <div className ="recipe__box">
            <img
            className="recipe__box-img" 
            src={recipe.recipe.image} 
            alt={recipe.recipe.label}/>
            <div className="recipe__text">
                
                <h5>{recipe.recipe.label}</h5>
            </div>
                </div>
           </div>
          
       
          );
          }
          )
          } 
          </div>
          </div>

          )
}
export default Recipes;