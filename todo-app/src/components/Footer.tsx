import React from 'react';
import { Filter } from '../types/filter';

interface FooterProps {
  count: number;
  setFilter: (filter: Filter.all | Filter.active | Filter.completed) => void;
  clearCompleted: () => void;
}

const Footer: React.FC<FooterProps> = ({ count, setFilter, clearCompleted }) => (
  <div>
    <span>{count} items left</span>
    <button onClick={() => setFilter(Filter.all)}>All</button>
    <button onClick={() => setFilter(Filter.active)}>Active</button>
    <button onClick={() => setFilter(Filter.completed)}>Completed</button>
    <button onClick={clearCompleted}>Clear completed</button>
  </div>
);

export default Footer;