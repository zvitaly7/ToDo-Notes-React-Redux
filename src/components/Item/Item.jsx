import React from "react";


import './item.scss';

const Item = ({title, text, removeTask, id, addOrEdit}) => (
    <li className='todo-item'>

        <span className={'title'} onClick={() => addOrEdit(id)}>{title}</span>
        <i className={'text'}>{text}</i>
        <span className='trash fa fa-trash-o' onClick={() => removeTask(id, title)}/>
    </li>
);


export default Item;


//<i className={isCompleted ? 'mark fa fa-check-circle':'mark_active  fa fa-circle'}/>