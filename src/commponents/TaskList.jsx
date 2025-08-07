// components/TaskList.jsx
import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onDelete, onToggleComplete }) => {
  return (
    <div className="mt-4">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;