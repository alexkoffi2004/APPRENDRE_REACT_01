import './App.css'
import TaskItem from './components/TaskItem/TaskItem'
import TaskList from './components/TaskList/TaskList'
import TaskTitle from './components/TaskTitle/TaskTitle'
import CreateTask from './components/CreateTask/CreateTask'
import {useState} from 'react';

const App = () => {
  const [newTask, setNewTask] = useState('');
  const [Tasks, setTasks] = useState([])
  const addTask = () => {
    const currentNewTask = {
      id: Date.now(),
      name: newTask,
      completed: false
    }
    const copyTasks = [...Tasks]
    copyTasks.push(currentNewTask)
    setTasks(copyTasks)
  }

  const deleteTask = (id) => {
    const deleteTasks = Tasks.filter((task) => task.id !== id)
    setTasks(deleteTasks)
    // console.log("delete Task")
  }
  return (
    <>
        <TaskTitle/>
        <CreateTask props={{setNewTask, addTask, newTask}}/>
        <TaskList props= {{Tasks, deleteTask}} />
    </>
  )
}

export default App
