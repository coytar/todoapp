import React from 'react'

export default function Todo( {todo, toggleCompletion} ) {
    function handleTodoClick() {
        toggleCompletion(todo.id)
    }

    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
                {todo.id}: {todo.name}
            </label>
        </div>
    )
}
