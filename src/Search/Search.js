import React from 'react';
import SearchList from './SearchList'


const Search = ({searchValue, recipeFetch, recipeResults}) => {
    return (
        <div>
            <form 
                onChange={(e)=> recipeFetch(e.target.value)} 
                style={{marginBottom:"2rem"}}>
                
            <input 
                style={{marginTop: "2rem"}}
                className="form__input"
                type= "text"
                value ={searchValue}
            />
                <button className='form__button'>Search</button>
            </form>
            
            {searchValue !== "" && <SearchList recipeResults={recipeResults}/>}
            
        </div>
    )
}

export default Search