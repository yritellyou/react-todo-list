import React from 'react';

import TodoItem from './TodoItem';

class TodoList extends React.Component {
    render() {
        const { items, clearList, deleteItem, handleEdit } = this.props;

        return (
            <ul className='list-group my-5'>
                <h3 className='text-capitalize text-center'>todo items</h3>

                {
                    items.map(item => {
                        return <TodoItem
                            key={item.id}
                            title={item.title}
                            deleteItem={() => deleteItem(item.id)}
                            handleEdit={() => handleEdit(item)}
                        // id={item.id}
                        />
                    })
                }

                <button
                    type='button'
                    className='btn btn-danger btn-block mt-3 text-capitalize'
                    onClick={clearList}>
                    clear items
                </button>
            </ul>
        );
    }
}

export default TodoList;