import { useEffect, useState } from 'react'
import Search from './components/Search'
import TaskPage from './components/TaskPage'
import { createTodo, fetchTodo, updateTodo, deleteTodo } from './axios'

function App() {
  const [search, setSearch] = useState('')
  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getTasks = async () => {
      try {
        setIsLoading(true)
        const data = await fetchTodo()
        setTasks(data)
        setIsLoading(false)
      } catch (err) {
        setError(err.message)
        setIsLoading(false)
      }
    }
    getTasks()
  }, [])

  const submitTask = async (description) => {
    if (!description.trim()) return
    try {
      const newTask = await createTodo(description)
      setTasks([...tasks, newTask])
      setSearch('')
    } catch (err) {
      setError(err.message)
    }
  }

  const completeTask = async (id, completed) => {
    try {
      const updatedTask = await updateTodo(id, { completed: !completed })
      setTasks(tasks.map(task => (task._id === id ? updatedTask : task)))
    } catch (err) {
      setError(err.message)
    }
  }

  const deleteTask = async (id) => {
    try {
      await deleteTodo(id)
      setTasks(tasks.filter(task => task._id !== id))
    } catch (err) {
      setError(err.message)
    }
  }

  const editTask = async (id, description) => {
    try {
      const updatedTask = await updateTodo(id, { description })
      setTasks(tasks.map(task => (task._id === id ? updatedTask : task)))
    } catch (err) {
      setError(err.message)
    }
  }

  if (error) return <div className="text-center py-4 text-red-500">Error: {error}</div>
  if (isLoading) return <div className="text-center py-4">Loading...</div>

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="text-4xl text-black text-center py-4 font-bold">
        TODO-MERN
      </header>
      <Search search={search} setSearch={setSearch} submitTask={submitTask} tasks={tasks} />
      <TaskPage tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} editTask={editTask} />
    </div>
  )
}

export default App