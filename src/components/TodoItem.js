import React from 'react'

const TodoItem = ({ todo, onDone }) => {
  return (
    <div className="card mb-4" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{todo.title}</h5>
        <p className="card-text">{todo.desc}</p>
        <a href="#" className="btn btn-primary" onClick={onDone}>Done</a>
      </div>
    </div>
  )
}

export default TodoItem