import React, { Component } from 'react';

export default class TodoForm extends Component {
    render() {
        const { addtask } = this.props;
        return (
            <div>
                <input
                    type="text"
                    placeholder='Enter task'
                />
                <button
                    type='submit'
                    onClick={addtask}
                >
                   Add Task 
                </button>
            </div>
        )
    }
}