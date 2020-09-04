import React from 'react';
import './styles/Search.css'


const Search=({handlerChange, nombrePoke})=>{
    return (
        <div className='search'>
       
        <input type='text' id='SearchPok'placeholder="Nombre pokemon" onChange={handlerChange} value={nombrePoke} ></input>
        <label id='searchLabel' htmlFor='SearchPok'>Busca tu Pokemon</label>
    </div>)
}

export default Search;