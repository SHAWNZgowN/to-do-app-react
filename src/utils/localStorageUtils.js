// Define a constant key for storing tasks in localStorage
const STORAGE_KEY = "tasks";

/**
 * Loads tasks from localStorage.
 * 
 * @returns {Array} An array of tasks if they exist in localStorage, otherwise an empty array.
 * @description
 * - Tries to retrieve tasks stored under the key defined by STORAGE_KEY.
 * - If tasks are found, it parses them from JSON format to a JavaScript array.
 * - If no tasks are found or an error occurs, returns an empty array.
 * - Logs an error message to the console if JSON parsing fails or any other error occurs.
 */
export const loadTasks = () => {
  try {
    const storedTasks = localStorage.getItem(STORAGE_KEY);
    return storedTasks ? JSON.parse(storedTasks) : [];  // Return parsed tasks or an empty array if null
  } catch (error) {
    console.error("Error loading tasks from localStorage:", error);
    return [];  // Return empty array if an error occurs
  }
};

/**
 * Saves tasks to localStorage.
 * 
 * @param {Array} tasks - The list of tasks to be saved.
 * @description
 * - Converts the tasks array into a JSON string.
 * - Stores the stringified tasks in localStorage under the key defined by STORAGE_KEY.
 * - Logs an error message to the console if saving fails.
 */
export const saveTasks = (tasks) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));  // Save tasks as a JSON string
  } catch (error) {
    console.error("Error saving tasks to localStorage:", error);
  }
};
