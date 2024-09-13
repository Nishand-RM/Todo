import React, { useState, useEffect } from 'react';

function TodoForm({ todo, updateTodo, deleteTodo }) {
  const [taskName, setTaskName] = useState(todo.taskName);
  const [description, setDescription] = useState(todo.description);
  const [status, setStatus] = useState(todo.status);

  useEffect(() => {
    setTaskName(todo.taskName);
    setDescription(todo.description);
    setStatus(todo.status);
  }, [todo]);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (taskName && description) {
      updateTodo(todo.id, { taskName, description, status, id: todo.id });
    }
  };

  return (
    <form onSubmit={handleUpdate} className="todo-form">
      <div>
        <label>Task Name:</label>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="not completed">Not Completed</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <button type="submit">Update Todo</button>
      <button type="button" onClick={() => deleteTodo(todo.id)}>Delete</button>
    </form>
  );
}

export default TodoForm;
