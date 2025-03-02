// Import necessary hooks and PropTypes for type checking
import { useState } from "react";
import PropTypes from "prop-types";

// TaskForm component allows users to add a new task with a title and description
const TaskForm = ({ addTask, closeForm }) => {
  // State to manage task title input
  const [title, setTitle] = useState("");
  // State to manage task description input
  const [description, setDescription] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();            // Prevents default form submission behavior
    addTask(title, description);    // Calls addTask function passed via props
    setTitle("");                  // Clears title input after submission
    setDescription("");            // Clears description input after submission
  };

  // JSX for the TaskForm component
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      {/* Card container for the form */}
      <div className="card bg-neutral shadow-lg p-5 w-[400px] relative">
        
        {/* Close Button to dismiss the popup */}
        <button
          onClick={closeForm}    // Calls closeForm function to close the popup
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
        >
          ❌
        </button>
        
        {/* Form Title */}
        <h2 className="text-xl font-semibold mb-3">📝 Add New Task</h2>

        {/* Form element to add a new task */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {/* Title Input Field */}
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter task title..."
            value={title}                        // Binds input value to title state
            onChange={(e) => setTitle(e.target.value)}  // Updates title state on change
            required                             // Makes the title input mandatory
          />

          {/* Description Textarea Field */}
          <textarea
            className="textarea textarea-bordered w-full resize-none"
            placeholder="Enter task details..."
            value={description}                   // Binds textarea value to description state
            onChange={(e) => setDescription(e.target.value)}  // Updates description state on change
          ></textarea>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full">➕ Add Task</button>
        </form>
      </div>
    </div>
  );
};

// Prop type validation for TaskForm component
TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,  // Ensures addTask is a required function prop
  closeForm: PropTypes.func.isRequired // Ensures closeForm is a required function prop
};

// Export TaskForm component as default
export default TaskForm;
