import React from "react";
import './search.scss';


const Search = ({onChange}) => (
    <div className='search'>
        <i className='search_logo fa fa-search'/>
        <input className="input" placeholder="Find your task" onChange={onChange}/>
    </div>

);

export default Search;