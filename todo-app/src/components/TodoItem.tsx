import React from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => (
  <li
    style={{
      textDecoration: todo.completed ? 'line-through' : 'none',
      opacity: todo.completed ? 0.5 : 1,
    }}
  >
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => toggleTodo(todo.id)}
    />
    {todo.text}
  </li>
);

export default TodoItem;