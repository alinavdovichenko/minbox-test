import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoApp from '../components/TodoApp';

test('добавление новой задачи', () => {
  render(<TodoApp />);
  
  const input = screen.getByPlaceholderText('What needs to be done?');
  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.keyDown(input, { key: 'Enter' });
  
  expect(screen.getByText('New Task')).toBeInTheDocument();
});

test('переключение статуса задачи', () => {
  render(<TodoApp />);
  
  const input = screen.getByPlaceholderText('What needs to be done?');
  fireEvent.change(input, { target: { value: 'Another Task' } });
  fireEvent.keyDown(input, { key: 'Enter' });
  
  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);
  
  expect(screen.getByText('Another Task')).toHaveStyle('text-decoration: line-through');
});

test('очистка выполненных задач', () => {
  render(<TodoApp />);
  
  const input = screen.getByPlaceholderText('What needs to be done?');
  fireEvent.change(input, { target: { value: 'Completed Task' } });
  fireEvent.keyDown(input, { key: 'Enter' });

  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);

  const clearButton = screen.getByText('Clear completed');
  fireEvent.click(clearButton);

  expect(screen.queryByText('Completed Task')).not.toBeInTheDocument();
});