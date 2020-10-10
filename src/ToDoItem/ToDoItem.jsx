import React from 'react';
import PropTypes from 'prop-types';
import './ToDoItem.css';

const ToDoItem = ({ text, id, done, checkItem }) => (
    <li className='list-group-item'>
        <input type='checkbox' name={id} value={done} onClick={() => checkItem(id)} />
        <span>{text}</span>
    </li>
);

ToDoItem.propTypes = {
    text: PropTypes.string,
    id: PropTypes.string,
    done: PropTypes.bool,
    checkItem: PropTypes.func
};

export default ToDoItem;