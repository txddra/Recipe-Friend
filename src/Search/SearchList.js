import React from 'react';


const SearchList = ({recipeResults}) => {



        return recipeResults.map((recipe)=>{
            return(
                <div className = "container">
        <div className="row">
        <div key ={recipe.label} className = "col-md-4" style ={{marginBottom:"2rem"}}>
            <div className ="recipes__box">
            <img
            className="recipe__box-img" 
            src={recipe.image} 
            alt={recipe.label}/>
            <div className="recipe__text">
            <h5 className ="recipes__title">
            {recipe.label.length < 20 ? `${recipe.label}` : `${recipe.label.substring(0,25)}...`}
                    </h5>
                    <p className ="recipes__subtitle">Publisher:</p>
                <span className ='publisher_text'>{recipe.source}</span>
</div>
                <button key={recipe.label} className="recipe_buttons">View Recipe</button>
            </div>

        </div>
        </div>
                </div>
            )
        })
    }
    // return {showRecipes()}
   
    
// }

export default SearchList
