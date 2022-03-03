import React from 'react'
import styles from './Counter.module.css'

function ToDo({todo, handleToggle})  {
  const handleClick = (e) => {
    e.preventDefault()
    handleToggle(e.currentTarget.id)
}

  return (
    <>
    <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? `${styles.todo} ${styles.strike}` : `${styles.todo}`}>
      {todo.task}
    </div>
    </>

  )
}

export default ToDo