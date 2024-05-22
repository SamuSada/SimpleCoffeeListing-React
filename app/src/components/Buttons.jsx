import React from 'react';
import './Buttons.css';

const Button = ({ isActive, onClick, children }) => (
  <button
    className={isActive ? 'active' : 'inactive'}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
