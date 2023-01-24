import React, { useState } from 'react';
import Modal from './Modal';
import TodoDetail from './TodoDetail';

export function TodoItem({ children, id, done }) {
  const [isDetailModelOpen, setIsDetailModelOpen] = useState(true);

  return (
    <>
      <li className="todo-item">
        <input
          id={`todo-done-${id}`}
          className="todo-checkbox"
          type="checkbox"
          checked={done}
          onChange={() => {}}
        />
        <label htmlFor={`todo-done-${id}`} className="todo-title">
          {children}
        </label>
        <DetailButton onClick={() => setIsDetailModelOpen(true)} />
        <RemoveButton onClick={() => {}} />
      </li>
      <Modal isOpen={isDetailModelOpen}>
        <TodoDetail id={id} />
        <button
          className="modal-close-button"
          onClick={() => setIsDetailModelOpen(false)}
        >
          ❌
        </button>
      </Modal>
    </>
  );
}

function RemoveButton({ onClick }) {
  return (
    <button className="todo-remove-button" type="button" onClick={onClick}>
      삭제
    </button>
  );
}

function DetailButton({ onClick }) {
  return (
    <button className="todo-detail-button" type="button" onClick={onClick}>
      상세
    </button>
  );
}
