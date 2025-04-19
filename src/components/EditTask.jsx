import { useState } from 'react'

const EditTask = ({ task, onSave, onCancel }) => {
  const [description, setDescription] = useState(task.description)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (description.trim()) {
      onSave(description)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center w-full">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="flex-1 p-2 border border-gray-300 rounded mr-2"
        autoFocus
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >
        Save
      </button>
      <button
        type="button"
        onClick={onCancel}
        className="bg-gray-300 text-black px-3 py-1 rounded hover:bg-gray-400 ml-2"
      >
        Cancel
      </button>
    </form>
  )
}

export default EditTask