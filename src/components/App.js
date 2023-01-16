import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const[tasks, setTasks] = useState(TASKS)
  const[categories, setCategories] = useState(CATEGORIES)

  const handleRemoveTask = (deleted) => {
    const filterTasks = tasks.filter((task) => deleted.text !== task.text)
    setTasks(filterTasks)
  }

  const handleAddTask = (newTask) => {
    setTasks(...tasks, newTask)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm categories={categories} handleAddTask={handleAddTask} />
      <TaskList tasks={tasks} handleRemoveTask={handleRemoveTask} />
    </div>
  );
}

export default App;
