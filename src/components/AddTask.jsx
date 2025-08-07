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
        // className="absolute right-1 top-1/2 -translate-y-1/2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm"
      >
        <FaPlusCircle />
      </button>
    </form>
  );
};

export default AddTask;