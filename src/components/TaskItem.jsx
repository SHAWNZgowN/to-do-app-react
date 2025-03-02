// Import PropTypes for prop type validation
import PropTypes from "prop-types";

// TaskItem component represents a single task with its title, description, and action buttons
const TaskItem = ({ task, index, toggleTaskCompletion, deleteTask }) => {
  return (
    <div
      // Card container for each task
      className={`card h-[400px] p-4 border border-gray-700 shadow-lg flex flex-col 
        ${
        task.completed ? "bg-green-500" : "bg-base-100"
      }`}
    >
      {/* Task Title Section */}
      <div className="mx-[10px] flex justify-between items-center mb-1">
        <h2
          className={`text-lg font-semibold 
            ${
            task.completed ? "line-through text-gray-500" : ""
          }`} // Strikethrough and gray color if task is completed
        >
          {task.title}
        </h2>
      </div>

      {/* Task Description Section */}
      <p
        className="text-gray-600 max-h-[260px] overflow-y-auto overflow-x-hidden break-words text-sm mt-1 mx-[10px] flex-grow"
      >
        {task.description}
      </p>

      {/* Button Container - Positioned at Bottom */}
      <div className="mt-auto flex justify-center gap-2">
        {/* Task Complete Button */}
        <button
          onClick={() => toggleTaskCompletion(index)}  // Toggles task completion status
          className="btn btn-primary w-1/2"
        >
          ✅ Task Complete
        </button>

        {/* Task Delete Button */}
        <button
          onClick={() => deleteTask(index)}  // Deletes the task
          className="btn btn-accent w-1/2"
        >
          🗑 Task Delete
        </button>
      </div>
    </div>
  );
};

// Prop type validation for TaskItem component
TaskItem.propTypes = {
  // task prop must be an object with title, description, and completed fields
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,        // Title must be a string and is required
    description: PropTypes.string.isRequired,  // Description must be a string and is required
    completed: PropTypes.bool.isRequired,      // Completed must be a boolean and is required
  }).isRequired,
  
  index: PropTypes.number.isRequired,            // Index must be a number and is required
  toggleTaskCompletion: PropTypes.func.isRequired, // toggleTaskCompletion must be a function and is required
  deleteTask: PropTypes.func.isRequired,           // deleteTask must be a function and is required
};

// Export TaskItem component as default
export default TaskItem;
