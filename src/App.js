import React from 'react';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false
  }

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.item || this.state.item === '') return;

    const newItem = {
      id: this.state.id,
      title: this.state.item
    }

    const updateItems = [...this.state.items, newItem];

    this.setState({
      items: updateItems,
      item: '',
      id: uuid(),
      editItem: false
    });

    // console.log(this.state);
  }

  clearList = () => {
    this.setState({
      items: []
    });
  }

  deleteItem = id => {
    const filteredItems = this.state.items.filter(item => {
      return item.id !== id;
    });

    this.setState({
      items: filteredItems
    });
  }

  handleEdit = currentItem => {
    const { id, title } = currentItem;

    // remove from list
    const filteredItems = this.state.items.filter(item => {
      return item.id !== id;
    });

    // setState for show in input card
    this.setState({
      items: filteredItems,
      id: id,
      item: title,
      editItem: true
    });
  }

  render() {
    return (
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-4'>
            <TodoInput
              item={this.state.item}
              editItem={this.state.editItem}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              deleteItem={this.deleteItem}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  };
}

export default App;
