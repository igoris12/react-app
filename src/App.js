import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/Header";
import React from "react";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
// import Footer from "./components/Footer";
// import About from "./components/About";


function App() {
  const [showAdd, setShowAdd] = useState(false)

  const [tasks, setTasks] = useState([{
    "id": 1,
    "text": "Do simething 1",
    " day": "Feb 5th at 2:30pm",
    "reminder": true
  },
  {
    "id": 2,
    "text": "Do simething 2",
    "day": "Feb 6th at 2:30pm",
    "reminder": false
  },
  {
    "id": 3,
    "text": "Do simething 3",
    "day": "Feb 8th at 2:30pm",
    "reminder": true
  }])



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
    <Router>
      <div className='container'>


        <Header onAdd={() => setShowAdd(!showAdd)}
          showAddTaskValue={showAdd} />
        <Route path="/react-app/`" exact render={(pros) =>
        (<>
          {showAdd && <AddTasks onAdd={addTask} />}
          {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}
          /> : 'Nothing to do you can go to sleep'}
        </>
        )} />
      </div>
    </Router>

  );
}



export default App;
