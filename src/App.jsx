import React, { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [todoName, setTodoName] = useState('');
  const [todoDescription, setTodoDescription] = useState('');
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const handleAddTodo = () => {
    if (todoName && todoDescription) {
      setTodos([...todos, {
        taskName: todoName,
        description: todoDescription,
        status: 'not completed',
        id: Date.now()
      }]);
      setTodoName('');
      setTodoDescription('');
    }
  };

  const updateTodo = (id, updatedTask) => {
    setTodos(todos.map(todo => todo.id === id ? updatedTask : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    return todo.status === filter;
  });

  return (
    <div className="container">
      <h1>Create a Todo</h1>
      <div>
        <input
          type="text"
          value={todoName}
          placeholder="Todo Name"
          onChange={(e) => setTodoName(e.target.value)}
        />
        <input
          type="text"
          value={todoDescription}
          placeholder="Todo Description"
          onChange={(e) => setTodoDescription(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
        <select onChange={handleFilterChange} value={filter}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="not completed">Not Completed</option>
        </select>
      </div>
      <TodoList
        todos={filteredTodos}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;

