import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { AddTodo } from '../redux/state/todo/todoSlice';

const CreateTodo = () => {
  const taskInput = useRef();
  const dispatch = useDispatch();
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-md-10">
          <input ref={taskInput} type="text" className='form-control' placeholder='Task Name' />
        </div>
        <div className="col-md-2">
          <button className='btn btn-primary' onClick={()=>dispatch(AddTodo(taskInput.current.value))}>Add To Do</button>
        </div>
      </div>
    </div>
  )
}

export default CreateTodo