import TaskItem from './TaskItem'

const TaskPage = ({ tasks, completeTask, deleteTask, editTask }) => {
  return (
    <div className="w-full max-w-md mx-auto mt-4">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks available</p>
      ) : (
        tasks.map(task => (
          <TaskItem
            key={task._id}
            task={task}
            completeTask={completeTask}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))
      )}
    </div>
  )
}

export default TaskPage