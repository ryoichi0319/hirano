import React from 'react'

const Todo = ({todo, toggleTodo}) => {
    const handle = () =>{
        toggleTodo(todo.id)
    }
  return (
    <div>
        <input type="checkbox" checked={todo.completed} onChange={handle} readOnly/>
        {todo.name}
        </div>
  )
}

export default Todo