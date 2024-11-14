import React from 'react';

interface FooterProps {
  count: number;
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
  clearCompleted: () => void;
}

const Footer: React.FC<FooterProps> = ({ count, setFilter, clearCompleted }) => (
  <div>
    <span>{count} items left</span>
    <button onClick={() => setFilter('all')}>All</button>
    <button onClick={() => setFilter('active')}>Active</button>
    <button onClick={() => setFilter('completed')}>Completed</button>
    <button onClick={clearCompleted}>Clear completed</button>
  </div>
);

export default Footer;