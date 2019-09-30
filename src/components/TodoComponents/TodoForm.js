import React, { Component } from 'react';

export default class TodoForm extends Component {
    render() {
        const { addTask, formValue, noticeChange } = this.props;
        return (
            <div>
                <input
                    type="text"
                    placeholder='Enter task'
                    value={formValue}
                    onChange={noticeChange}
                />
                <button
                    type='submit'
                    onClick={addTask}
                >
                   Add Task 
                </button>
            </div>
        )
    }
}