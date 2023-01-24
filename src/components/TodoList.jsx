import React from 'react';
import { TodoItem } from './TodoItem';

import createQueryFn from '../util/createQueryFn';
import { useQuery } from '@tanstack/react-query';
import Loading from './Loading';

const fetchTodos = createQueryFn('/todos');

export default function TodoList() {
  const { data: todoData, isLoading } = useQuery(['todos'], fetchTodos);

  return (
    <ul className="todo-list-container">
      {isLoading && <Loading />}
      {todoData?.map((todo) => (
        <TodoItem id={todo.id} done={todo.done} key={todo.id}>
          {todo.title}
        </TodoItem>
      ))}
    </ul>
  );
}
