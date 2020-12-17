import React from 'react';




const RecipeForm = (props) =>(
    <form onSubmit={props.recipeGrab} style={{marginBottom:"2rem"}} >
        <input className="form__input"
        type="text"
        name ="recipeName"></input>
        <button className='form__button'>Search</button>
    </form> 
);

export default RecipeForm;