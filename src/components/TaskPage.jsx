import React from 'react';
import TaskItem from './TaskItem';

const TaskPage = ({ tasks, completeTask, editTask, deleteTask }) => {
  const [filter, setFilter] = React.useState('all');

  const filteredTasks = React.useMemo(() => {
    switch (filter) {
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'incomplete':
        return tasks.filter(task => !task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const FilterToggle = () => (
    <div className="flex justify-center gap-3 mb-6">
      <button
        className={`px-4 py-2 rounded-full text-sm font-medium ${
          filter === 'all'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        onClick={() => handleFilterChange('all')}
      >
        All
      </button>
      <button
        className={`px-4 py-2 rounded-full text-sm font-medium ${
          filter === 'completed'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        onClick={() => handleFilterChange('completed')}
      >
        Completed
      </button>
      <button
        className={`px-4 py-2 rounded-full text-sm font-medium ${
          filter === 'incomplete'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        onClick={() => handleFilterChange('incomplete')}
      >
        Incomplete
      </button>
    </div>
  );

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <FilterToggle />
      {tasks.length > 0 ? (
        <div className="space-y-3">
          {filteredTasks.slice().reverse().map(task => (
            <TaskItem
              key={task._id}
              task={task}
              completeTask={completeTask}
              editTask={editTask}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center p-6 bg-white rounded-md shadow-sm">
          <p className="text-gray-500">No tasks available</p>
        </div>
      )}
    </div>
  );
};

export default TaskPage;