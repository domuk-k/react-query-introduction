import React from 'react';
import { TodoItem } from './TodoItem';

const todoData = [
  {
    id: 'b4dcf2df-3ff8-4441-b037-9adab856ea35',
    title: 'tunnel',
    done: false,
  },
  {
    id: '4640b161-872d-4609-bc4d-f3a677466a48',
    title: 'apply',
    done: false,
  },
];

export default function TodoList() {
  return (
    <ul className="todo-list-container">
      {todoData?.map((todo) => (
        <TodoItem id={todo.id} done={todo.done} key={todo.id}>
          {todo.title}
        </TodoItem>
      ))}
    </ul>
  );
}
