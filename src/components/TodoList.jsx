import React from 'react';
import { TodoItem } from './TodoItem';

import createQueryFn from '../util/createQueryFn';
import { useQuery } from '@tanstack/react-query';
import Loading from './Loading';
import Pager from './Pager';

const DEFAULT_LIMIT = 10;

const getTodoFetcher = (page = 1) =>
  createQueryFn(
    `/todos?limit=${DEFAULT_LIMIT}&offset=${(page - 1) * DEFAULT_LIMIT}`
  );

export default function TodoList() {
  const { data, status } = useQuery(['todos'], getTodoFetcher());

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
          <Pager
            currentPage={1}
            maxPage={Math.ceil(data.totalCount / 10)}
            onChange={(pageNumber) => {
              // set this pageNumber as a query parameter
            }}
          />
        </>
      )}
    </ul>
  );
}
