import React from "react";
import './search.scss';
import {Input} from "../Input/Input";
import {Button} from "../Buttons/SimpleButton/Button";


const Search = ({onChange , value, onSubmit}) => (
    <div className='search'>
        <i className='search_logo fa fa-search'/>
        <Input
            type='title'
            className="input"
            value={value}
            onChange={onChange}
        />
        <Button className='find-button' onClick={onSubmit}>Search</Button>
    </div>

);

export default Search;