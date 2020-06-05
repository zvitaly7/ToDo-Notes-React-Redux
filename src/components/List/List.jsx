import React from "react";
import PropTypes from 'prop-types';
import Item from "../Item/Item"
import './list.scss';

const List = ({taskList, removeTask,addOrEdit}) => (
  <ul className='todo-list'>
      {taskList.map(({id, title, text})=>(
          <Item removeTask = {removeTask} addOrEdit={addOrEdit} id = {id} key={id} title={title} text={text}/>
      ))}
  </ul>
);

List.propTypes = {
  taskList: PropTypes.array,
};
List.defaultProps = {
  taskList: [],
};

export default List;