// Import PropTypes for prop type validation
import PropTypes from "prop-types";

// Import TaskItem component for rendering individual tasks
import TaskItem from "./TaskItem";

// TaskList component renders a list of tasks and a button to add new tasks
const TaskList = ({ tasks, toggleTaskCompletion, deleteTask, openForm }) => {
  return (
    // Main container for the task list with scroll support
    <div className="card bg-neutral shadow-lg p-5 h-screen overflow-y-auto">
      
      {/* Grid layout for tasks and add task button */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Map over tasks array to render TaskItem for each task */}
        {tasks.map((task, index) => (
          <TaskItem
            key={index}  // Unique key for each task item to help React identify them
            task={task}   // Task data passed as prop
            toggleTaskCompletion={() => toggleTaskCompletion(index)}  // Handler for toggling task completion
            deleteTask={() => deleteTask(index)}  // Handler for deleting task
          />
        ))}

        {/* Plus Button Card - Opens TaskForm Popup */}
        <div
          className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 h-[400px] cursor-pointer hover:bg-base-100 transition rounded-lg"
          onClick={openForm}  // Triggers the function to open task form popup
        >
          {/* Plus Icon for the Add Task Button */}
          <svg
            className="h-12 w-12 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"  // Vertical and horizontal lines to form a plus sign
            />
          </svg>
          <p className="text-gray-500 mt-2">Add Task</p>
        </div>
      </div>
    </div>
  );
};

// Prop type validation for TaskList component
TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,        // Title must be a string and is required
      description: PropTypes.string.isRequired,  // Description must be a string and is required
      completed: PropTypes.bool.isRequired,      // Completed must be a boolean and is required
    })
  ).isRequired,
  
  toggleTaskCompletion: PropTypes.func.isRequired,  // toggleTaskCompletion must be a function and is required
  deleteTask: PropTypes.func.isRequired,            // deleteTask must be a function and is required
  openForm: PropTypes.func.isRequired,              // openForm must be a function and is required
};

// Export TaskList component as default
export default TaskList;
