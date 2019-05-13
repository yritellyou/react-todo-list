import React from 'react';

import './TodoItem.css';

class TodoItem extends React.Component {
    render() {
        const { title, deleteItem, handleEdit } = this.props;

        return (
            <li className='todo-list-item list-group-item d-flex justify-content-between my-2 text-capitalize'>
                <h6>{title}</h6>
                <div className='todo-icon hide'>
                    <span className='mx-2 text-success' onClick={handleEdit}><i className="fas fa-pen"></i></span>
                    <span className='mx-2 text-danger' onClick={deleteItem}><i className="fas fa-trash"></i></span>
                </div>
            </li>
        );
    }
}

export default TodoItem;