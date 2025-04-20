import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';

const EditTask = ({ task, editTask }) => {
  const [description, setDescription] = useState(task.description);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (e) => {
    e.preventDefault();
    if (!description.trim()) return;
    editTask(task._id, description);
    setIsEditing(false);
    setDescription(task.description);
    console.log('Edit submitted for task ID:', task._id, 'with description:', description);
  };

  return (
    <>
      {isEditing ? (
        <form onSubmit={handleEdit} className="flex items-center gap-2">
          <div className="relative">
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="p-2 pl-10 bg-white border-0 rounded-md shadow-sm focus:ring-2 focus:ring-blue-200 text-gray-800"
              id="editTask"
            />
            <label
              htmlFor="editTask"
              className="absolute left-10 top-[-0.5rem] text-blue-600 text-xs bg-white px-1"
            >
              Edit task
            </label>
            {description === task.description && (
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            )}
          </div>
          <button type="submit" className="p-2 text-blue-500 hover:text-blue-600">
            <EditIcon />
          </button>
        </form>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="p-2 text-blue-500 hover:text-blue-600"
        >
          <EditIcon />
        </button>
      )}
    </>
  );
};

export default EditTask;