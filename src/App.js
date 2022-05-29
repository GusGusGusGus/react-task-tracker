
import { useState } from "react";
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'



const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
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

//add task
const addTask = (task) => {
  //id mockup
  const id = Math.floor(Math.random() * 10000) + 1

  const newTask = { id, ...task }
  setTasks([...tasks, newTask]) 
}

//delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
} 

//toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header 
        onAdd={ () => setShowAddTask(!showAddTask)} 
        showAdd={showAddTask} 
      />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {
        tasks.length > 0 ? 
        <Tasks tasks={tasks} 
          onDelete={deleteTask} 
          onToggle={toggleReminder} /> : 
        'No tasks to show'
      }
      
    </div>
  )
}

export default App
