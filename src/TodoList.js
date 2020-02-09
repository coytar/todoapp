import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, toggleCompletion }) {
    return (
        todos.map(x => {
            return <Todo key={x.id} todo={x} toggleCompletion={toggleCompletion} />
        })
    )
}
