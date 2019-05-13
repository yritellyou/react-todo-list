import React from 'react';

class TodoInput extends React.Component {
    render() {
        const { item, editItem, handleChange, handleSubmit } = this.props;

        return (
            <div className='card card-body my-3'>
                <h3 className='text-capitalize text-center'>todo input</h3>
                <form onSubmit={handleSubmit}>
                    <div className='input-group flex-nowrap'>
                        <div className='input-group-prepend'>
                            <span className={editItem ? 'input-group-text bg-success text-white' : 'input-group-text bg-primary text-white'}>
                                <i className="fas fa-book"></i>
                            </span>
                        </div>
                        <input
                            type='text'
                            className='form-control text-capitalize'
                            placeholder='Add todo things'
                            value={item}
                            onChange={handleChange}
                        />
                    </div>
                    <button type='submit' className={editItem ? 'btn btn-block mt-3 btn-success' : 'btn btn-block mt-3 btn-primary'}>{editItem ? 'Edit Item' : 'Add Item'}</button>
                </form>
            </div>
        );
    }
}

export default TodoInput;