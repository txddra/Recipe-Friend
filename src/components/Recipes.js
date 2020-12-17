

import React from 'react'

export const Recipes = (props) => {
    return (
    <div className = "container">
        <div className="row">
        {props.recipes.map((recipe)=>{
          return (
            <div key ={recipe.recipe.label} className = "col-md-4" style ={{marginBottom:"2rem"}}>
                <div className ="recipe__box">
            <img
            className="recipe__box-img" 
            src={recipe.recipe.image} 
            alt={recipe.recipe.label}/>
            <div className="recipe__text">

                <h5 className ="recipes__title">{recipe.recipe.label}</h5>
                <p className ="recipes__subtitle">Publisher:</p>
                <span>{recipe.recipe.source}</span>

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