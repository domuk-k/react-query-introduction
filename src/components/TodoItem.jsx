import React from 'react';

export function TodoItem({ children, id }) {
  return (
    <li className="todo-item">
      <input id={`todo-done-${id}`} className="todo-checkbox" type="checkbox" />
      <label htmlFor={`todo-done-${id}`} className="todo-title">
        {children}
      </label>
      <RemoveButton onClick={() => {}} />
    </li>
  );
}

function RemoveButton({ onClick }) {
  return (
    <button className="todo-remove-button" type="button" onClick={onClick}>
      삭제
    </button>
  );
}
