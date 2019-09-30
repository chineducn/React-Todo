import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: [],
      todoTask: '',
    }
  }

  deleteAllTasks = event => {
    event.preventDefault();
    this.setState({ todoList: [] })
  }

  handleChange = event => {
    this.setState({ todoTask: event.target.value })
  }

  handleCreateTask = event => {
    // debugger
    event.preventDefault();
    this.setState(
      {
        todoList:
          [
            ...this.state.todoList,
            {
              task: this.state.todoTask,
              id: Date.now(),
              completed: false,
            }
          ]
      }
    );
    this.setState({ todoTask: '' });
  }

  handleCompletedTask = eventer => {
    // debugger
  }

  render() {
    
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          list={this.state.todoList}
          clearAll={this.deleteAllTasks}
          identifyAsCompleted={this.handleCompletedTask}
        />
        <TodoForm
          noticeChange={this.handleChange}
          formValue={this.state.todoTask}
          addTask={this.handleCreateTask}
        />
      </div>
    );
  }
}

export default App;
