import React, { useState } from 'react' 

const TodoList = (props) => {
  const [todo, setTodo] = useState('')

  const handleChange = e => {
    setTodo(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    // props.onSubmit({
    //   id: Math.floor(Math.random() * 10000),
    //   text: todo
    // })

    setTodo('')
  }

  return (
    <>
    <span>
      <h1>A todo List!</h1>
      <ul>
        <li>
          {todo}
        </li>
      </ul>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder='Add a todo' 
        value={todo}
        name="Todo"
        onChange={handleChange}/>
      <button>Submit</button>
      </form>
    </span>
    </>
  )
}

export default TodoList