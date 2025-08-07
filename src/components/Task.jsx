// components/Task.jsx
import React from "react";

const Task = ({ task, onDelete, onToggleComplete }) => {
  return (
    <div className="flex items-center justify-between p-2 border-b">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          className="h-4 w-4"
        />
        <span className={`${task.completed ? "line-through text-gray-400" : ""}`}>
          {task.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;