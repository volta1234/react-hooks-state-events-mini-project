import React, { useState } from "react";

function NewTaskForm({categories, handleAddTask}) {
  const[details, setDetails] = useState("")
  const[category, setCategory] = useState("")

function handleDetails(event) {
  setDetails(event.target.value)
}

function handleCategory(event) {
  setCategory(event.target.value)
}

function handleSubmit(event) {
  event.preventDefault()
  let newTask = {
    text: details,
    category: category
  }
  handleAddTask(newTask)
}


  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleDetails} type="text" name="text" value = {details} />
      </label>
      <label>
        Category
        <select onChange={handleCategory} name="category" value={category}>
          {categories.map((category) => (
            <option key={category} >{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
