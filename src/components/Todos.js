import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
  return (
    <div className="container  align-content-center">
      <h3 className='text-center mb-4 mt-2 text-success'>To Do List</h3>
      <div className="row">
        {props.todos.map((todo) => (
          <div key={todo.sno} className="col-sm-12 col-md-6 col-lg-3 mb-4">
            <TodoItem todo={todo} onDone={props.onDone}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Todos