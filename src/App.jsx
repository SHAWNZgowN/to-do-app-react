// Import necessary React hooks and components
import { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { loadTasks, saveTasks } from "./utils/localStorageUtils";

// Main App component
const App = () => {
  // State to manage tasks, initialized from local storage
  const [tasks, setTasks] = useState(() => loadTasks());
  // State to control the visibility of the TaskForm popup
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Effect to save tasks to local storage whenever the tasks array changes
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);  

  // Function to add a new task
  const addTask = (title, description) => {
    // Prevent adding a task if the title is empty
    if (!title.trim()) return;
    // Update tasks state with the new task and close the popup
    setTasks((prev) => [...prev, { title, description, completed: false }]);
    setIsFormOpen(false); // Close popup after adding task
  };

  // Function to toggle task completion status
  const toggleTaskCompletion = (index) => {
    setTasks((prev) =>
      prev.map((task, i) => 
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to delete a task based on index
  const deleteTask = (index) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  // JSX structure of the app
  return (
    <div className="bg-neutral min-h-screen">
      {/* Navigation bar at the top */}
      <Navbar />

      <div className="mx-auto p-4">
        {/* TaskForm popup, shown only if isFormOpen is true */}
        {isFormOpen && <TaskForm addTask={addTask} closeForm={() => setIsFormOpen(false)} />}

        {/* TaskList component displaying all tasks and the add task button */}
        <TaskList 
          tasks={tasks} 
          toggleTaskCompletion={toggleTaskCompletion} 
          deleteTask={deleteTask} 
          openForm={() => setIsFormOpen(true)} 
        />
      </div>
    </div>
  );
};

// Export App component as default
export default App;
