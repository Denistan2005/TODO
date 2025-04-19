const Search = ({ search, setSearch, submitTask, tasks }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    submitTask(search)
    setSearch('')
  }

  const filteredTasks = (tasks || []).filter(task =>
    task?.description?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <form onSubmit={handleSubmit} className="flex items-center relative">
        <svg
          className="absolute left-3 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input
          type="text"
          placeholder="Add or search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full py-3 pl-10 pr-3 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
        />
      </form>
      {search && filteredTasks.length > 0 && (
        <div className="mt-2 bg-white shadow-md rounded-lg p-4 max-h-40 overflow-y-auto">
          {filteredTasks.map(task => (
            <p key={task._id} className="text-gray-700 py-1">
              {task.description}
            </p>
          ))}
        </div>
      )}
      {search && filteredTasks.length === 0 && (
        <div className="mt-2 text-gray-500 text-center">No tasks found</div>
      )}
    </div>
  )
}

export default Search