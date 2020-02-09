import React, { useState, useRef, useEffect }  from 'react';
import TodoList from './TodoList';
import uuidv4 from 'uuid/v4';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

export default function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  // Load todo
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  // Save todo
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  // Add todo
  function handleAddTodo(e) {
    const name = todoNameRef.current.value 
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  // Toggle todo completion
  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(x => x.id == id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  // Clear completed todos
  function handleClearCompleted()
  {
    const newTodos = todos.filter(x => !x.complete)
    setTodos(newTodos)
  }

  return (
    <>
      <TodoList todos={todos} toggleCompletion={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearCompleted}>Clear Completed</button>
      <div>{todos.filter(x => !x.complete).length} left to do</div>
    </>
  );
}
