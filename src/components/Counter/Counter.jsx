import React, { useState } from 'react' 
import data from './data.json'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import styles from './Counter.module.css'

const Counter = (props) => {
  const [toDoList, setToDoList] = useState(data)

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput) => {
    let copy = [...toDoList]
    copy = [...copy, { id:toDoList.length + 1, task: userInput, complete: false}]
    setToDoList(copy)
  }


  return (
    <>
    <span className={styles.main}>
      <h1>
        Todo List!
      </h1>
      <TodoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <TodoForm addTask={addTask} />
    </span>
    </>
  )
}

export default Counter