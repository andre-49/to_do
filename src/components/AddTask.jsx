// components/AddTask.jsx
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const AddTask = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTask(inputValue);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a task..."
        className="flex-1 p-2 border rounded-3xl"
      />
      <button
        type="submit"
        className="p-2 rounded text-blue-600 text-3xl -mx-16 border-gray-200"
        
      >
        <FaPlusCircle />
      </button>
    </form>
  );
};

export default AddTask;