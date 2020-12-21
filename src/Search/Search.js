import React from 'react';


const Search = ({searchValue, recipeFetch}) => {
    return (
        <div>
            <form 
                onChange={(e)=> recipeFetch(e.target.value)} 
            style={{marginBottom:"2rem"}}>
                <input 
                // onChange ={{}}
                style={{marginTop: "2rem"}}
                className="form__input"
                type= "text"
                value ={searchValue}
                />
                 <button className='form__button'>Search</button>
            </form>
            
            
        </div>
    )
}

export default Search