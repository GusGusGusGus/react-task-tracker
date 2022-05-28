
import React from "react";
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react";



const App = () => {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 12h',
        reminder: true,
    },
    {
        id: 2,
        text: 'Mom Birthday',
        day: 'Feb 25th at 8h',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Apr 13th at 12h',
        reminder: false,
    },
])

//delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
} 


  return (
    <div className="container">
      <Header />
      {
        tasks.length > 0 ? 
        <Tasks tasks={tasks} onDelete={deleteTask}/> : 
        'No tasks to show'
      }
      
    </div>
  )
}

export default App
