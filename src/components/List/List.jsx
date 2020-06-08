import React from "react";
import Item from "../Item/Item"
import './list.scss';

const List = ({taskList, removeTask, addOrEdit}) => (
    <ul className='todo-list'>
        {taskList.map(({id, title, text}) => (
            <Item removeTask={removeTask} addOrEdit={addOrEdit} id={id} key={id} title={title} text={text}/>
        ))}
    </ul>
);

export default List;