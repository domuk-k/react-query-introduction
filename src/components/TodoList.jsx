import React from 'react';
import { TodoItem } from './TodoItem';

const todoData = [
  { id: 1, title: 'wow' },
  { id: 2, title: 'wow' },
  { id: 3, title: 'wow' },
];

export default function TodoList() {
  return (
    <ul className="todo-list-container">
      {todoData.map((todo) => (
        <TodoItem id={todo.id}>{todo.title}</TodoItem>
      ))}
    </ul>
  );
}
