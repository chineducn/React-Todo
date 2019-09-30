// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
    render() {
        const { list, clearAll } = this.props;
        return (
            <>
                <h3>Tasks</h3>
                {
                    list.map(item =>
                        <Todo
                            key={item.id}
                            task={item.task}
                        />
                    )
                }
                <button
                    type='submit'
                    onClick={clearAll}
                >
                    Clear All Tasks
                </button>
            </>
        )
    }
} 