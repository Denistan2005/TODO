import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditTask from './EditTask';

const TaskItem = ({ task, completeTask, editTask, deleteTask }) => {
  return (
    <div className="bg-white rounded-md p-3 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed || false}
          className="h-4 w-4 text-blue-500 focus:ring-blue-200"
          onChange={() => {
            completeTask(task._id);
            console.log('Checkbox toggled for task ID:', task._id);
          }}
        />
        {task.completed ? (
          <svg
            className="w-5 h-5 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
        <p className="text-gray-800">{task.description}</p>
      </div>
      <div className="flex gap-1">
        <EditTask task={task} editTask={editTask} />
        <button
          onClick={() => {
            deleteTask(task._id);
            console.log('Delete clicked for task ID:', task._id);
          }}
          className="p-2 text-blue-500 hover:text-blue-600"
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;