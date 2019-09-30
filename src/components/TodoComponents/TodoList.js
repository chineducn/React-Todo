// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
    render() {
        const { list } = this.props;
        return (
            <>
                {
                    list.map(item =>
                        <Todo
                            key={item.id}
                            task={item.task}
                        />
                    )
                }
            </>
        )
    }
} 