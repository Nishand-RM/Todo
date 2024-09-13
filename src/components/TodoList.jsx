import React from 'react';
import TodoForm from './TodoForm';

function TodoList({ todos, updateTodo, deleteTodo }) {
  return (
    <div>
      {todos.map(todo => (
        <TodoForm
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;

