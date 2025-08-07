// components/Task.jsx
import { FaTrashAlt } from "react-icons/fa";

const Task = ({ task, onDelete, onToggleComplete }) => {
  return (
    <div className="flex items-center justify-between p-2 border-b border-gray-300">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          className="h-4 w-4"
        />
        <span className={`${task.completed ? "line-through text-gray-400" : ""} ml-2 text-xl`}>
          {task.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="bg-gray-300 hover:bg-gray-400 text-red-500 text-2xl p-2 rounded-full"
      >
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default Task;