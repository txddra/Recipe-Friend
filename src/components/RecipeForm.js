import React from 'react';




const RecipeForm = (props) =>(
    <form onSubmit={props.recipeGrab} >
        <input type="text"
        name ="recipeName"></input>
        <button>Search</button>
    </form> 
);

export default RecipeForm;