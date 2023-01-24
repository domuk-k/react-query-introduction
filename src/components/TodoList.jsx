import React from 'react';
import { TodoItem } from './TodoItem';

const todoData = [
  {
    id: 'fc6bb456-8d99-4b30-9f4d-f720045607b5',
    title: 'crick',
    done: false,
  },
  {
    id: '7cvu3h54-8d99-4b30-9f4d-f720045607b5',
    title: 'flicker',
    done: false,
  },
];

export default function TodoList() {
  return (
    <ul className="todo-list-container">
      {todoData.map((todo) => (
        <TodoItem id={todo.id} done={todo.done} key={todo.id}>
          {todo.title}
        </TodoItem>
      ))}
    </ul>
  );
}
