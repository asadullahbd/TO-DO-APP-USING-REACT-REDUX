import React from 'react'
import TodoList from './../components/TodoList';
import CreateTodo from './../components/CreateTodo';

const TodoPage = () => {
  return (
    <div className='container mx-auto mt-4'>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5>My Todo App</h5>
            </div>
            <div className="card-body">
              <CreateTodo/>
              <TodoList/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoPage