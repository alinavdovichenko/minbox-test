import React, { useState } from 'react';
import TodoList from './TodoList';
import Footer from './Footer';
import { Filter } from '../types/filter';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter.all | Filter.active | Filter.completed>(Filter.all);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === Filter.active) return !todo.completed;
    if (filter === Filter.completed) return todo.completed;
    return true;
  });

  return (
    <div>
      <h1>ToDo App</h1>
      <input
        type="text"
        placeholder="What needs to be done?"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.currentTarget.value.trim()) {
            addTodo(e.currentTarget.value);
            e.currentTarget.value = '';
          }
        }}
      />
      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />
      <Footer
        count={todos.filter(todo => !todo.completed).length}
        setFilter={setFilter}
        clearCompleted={clearCompleted}
      />
    </div>
  );
};

export default TodoApp;