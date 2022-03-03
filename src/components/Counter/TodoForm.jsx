import React, { useState }from 'react'

function TodoForm({addTask}) {
  const [userInput, setUserInput] = useState('')

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(userInput)
    setUserInput("")
  }

  return (
    <>
    <div>
        <form>
          <input value ={userInput} type="text" onChange={handleChange} placeholder='ToDo?'/>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </>
    )
}

export default TodoForm