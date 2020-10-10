import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from '../ToDoItem/ToDoItem.jsx';

const ToDos = ({ toDos, checkItem }) => (
    <ul className='list-group'>
        {toDos.map(item => <ToDoItem {...item} checkItem={checkItem} />)}
    </ul>
)

ToDos.propTypes = {
    toDos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        id: PropTypes.string,
        done: PropTypes.bool
    })),
    checkItem: PropTypes.func
};

export default ToDos;