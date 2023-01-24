import React from 'react';
import { TodoItem } from './TodoItem';

import createQueryFn from '../util/createQueryFn';
import { useQuery } from '@tanstack/react-query';
import Loading from './Loading';
import Pager from './Pager';

const fetchTodos = createQueryFn('/todos');

export default function TodoList() {
  const { data, status } = useQuery(['todos'], fetchTodos);

  return (
    <ul className="todo-list-container">
      {status === 'loading' && <Loading />}
      {status === 'success' && (
        <>
          {data?.todos?.map((todo) => (
            <TodoItem id={todo.id} done={todo.done} key={todo.id}>
              {todo.title}
            </TodoItem>
          ))}
          <Pager maxPage={Math.ceil(data.totalCount / 10)} />
        </>
      )}
    </ul>
  );
}
