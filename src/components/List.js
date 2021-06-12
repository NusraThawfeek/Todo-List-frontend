import React from 'react'
import Todo from './Todo'

const List = ({ list, removeTodo, editTodo }) => {
    const renderedList = list.map((item) =>
        <Todo title={item.title}
            removeTodo={(e) => removeTodo(item._id)}
            editTodo={(updatedItem) => editTodo(item._id, updatedItem)}
            completed={item.completed}
            key={item._id}
        />

    )

    return (
        <div className="ui grid center aligned">
            {renderedList}

        </div>
    )
}

export default List


