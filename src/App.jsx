import { useEffect, useState } from 'react';
import './App.css';
import Search from './components/Search';
import TaskPage from './components/TaskPage';
import { createTodo, fetchTodo } from './axios';
import axiosInstance from './axios';

function App() {
  const [search, setSearch] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      try {
        setIsLoading(true);
        const data = await fetchTodo();
        setTasks(data);
        console.log('Tasks fetched:', data);
      } catch (err) {
        console.error('Error fetching tasks:', {
          message: err.message,
          status: err.response?.status,
          data: err.response?.data,
        });
      } finally {
        setIsLoading(false);
      }
    };

    getTasks();
  }, []);

  const submitTask = async (newTask) => {
    if (!newTask.trim()) return;

    try {
      const newTaskData = await createTodo(newTask);
      setTasks([...tasks, newTaskData]);
      console.log('Task created:', newTaskData);
    } catch (err) {
      console.error('Error creating task:', {
        message: err.message,
        status: err.response?.status,
        data: err.response?.data,
      });
    }
  };

  const completeTask = async (id) => {
    try {
      console.log('Completing Task ID:', id);
      const task = tasks.find(t => t._id === id);
      const updatedTask = { ...task, completed: !task.completed };
      const response = await axiosInstance.put(`/${id}`, updatedTask);
      console.log('Complete task response:', {
        status: response.status,
        data: response.data,
      });
      setTasks(tasks.map(t => (t._id === id ? response.data : t)));
    } catch (err) {
      console.error('Error completing task:', {
        message: err.message,
        status: err.response?.status,
        data: err.response?.data,
      });
    }
  };

  const deleteTask = async (id) => {
    try {
      console.log('Deleting Task ID:', id);
      const response = await axiosInstance.delete(`/${id}`);
      console.log('Delete task response:', {
        status: response.status,
        data: response.data,
      });
      setTasks(tasks.filter(t => t._id !== id));
    } catch (err) {
      console.error('Error deleting task:', {
        message: err.message,
        status: err.response?.status,
        data: err.response?.data,
      });
    }
  };

  const editTask = async (id, newDescription) => {
    try {
      console.log('Editing Task ID:', id, 'with description:', newDescription);
      const updatedTask = { description: newDescription };
      const response = await axiosInstance.put(`/${id}`, updatedTask);
      console.log('Edit task response:', {
        status: response.status,
        data: response.data,
      });
      setTasks(tasks.map(t => (t._id === id ? response.data : t)));
    } catch (err) {
      console.error('Error editing task:', {
        message: err.message,
        status: err.response?.status,
        data: err.response?.data,
      });
    }
  };

  const filteredTasks = tasks.filter(task =>
    task.description.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) return <div className="text-center py-4 text-gray-500">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="p-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center">
        <div className="flex items-center justify-center gap-2">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 className="text-3xl font-bold">TODO Website</h1>
        </div>
      </header>
      <main className="p-6">
        <Search setSearch={setSearch} submitTask={submitTask} />
        <TaskPage
          tasks={filteredTasks}
          completeTask={completeTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </main>
    </div>
  );
}

export default App;