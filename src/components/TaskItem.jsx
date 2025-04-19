import { useState } from 'react'
import EditTask from './EditTask'

const TaskItem = ({ task, completeTask, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false)

  const handleEdit = (newDescription) => {
    editTask(task._id, newDescription)
    setIsEditing(false)
  }

  return (
    <div className="flex items-center justify-between bg-white p-3 mb-2 rounded-lg shadow">
      {isEditing ? (
        <EditTask task={task} onSave={handleEdit} onCancel={() => setIsEditing(false)} />
      ) : (
        <>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => completeTask(task._id, task.completed)}
              className="mr-2"
            />
            <span className={task.completed ? 'line-through text-gray-500' : ''}>
              {task.description}
            </span>
          </div>
          <div>
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-500 hover:text-blue-700 mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTask(task._id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default TaskItem