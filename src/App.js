import Header from "./components/Header";
import React from "react";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react"
import AddTasks from "./components/AddTasks";



function App() {
  const [showAdd, setShowAdd] = useState(false)

  const [tasks, setTasks] = useState([])

  // useEffect()

  // add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1

    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }


  // delete func
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  // reminder func
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    )
    )
  }

  return (
    <div className='container'>
      <Header onAdd={() => setShowAdd(!showAdd)}
        showAddTaskValue={showAdd} />

      {showAdd && <AddTasks onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}
      /> : 'Nothing to do you can go to sleep'}
    </div>
  );
}



export default App;
