import Header from "./components/Header";
import React from "react";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react"
import AddTasks from "./components/AddTasks";



function App() {
  const [showAdd, setShowAdd] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks();

  }, [])


  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }
  // add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1

    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }


  // delete func
  const deleteTask = (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })

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
