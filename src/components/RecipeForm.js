import React from 'react';




const RecipeForm = (props) =>(
    <form onSubmit={props.recipeGrab} >
        <input type="text"></input>
        <button>Search</button>
    </form> 
);

export default RecipeForm;