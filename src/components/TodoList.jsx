import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { TodoItem } from './TodoItem';
import Loading from './Loading';
import Pager from './Pager';

import createQueryFn from '../util/createQueryFn';

const DEFAULT_LIMIT = 10;

const getTodoFetcher = (page = 1) =>
  createQueryFn(
    `/todos?limit=${DEFAULT_LIMIT}&offset=${(page - 1) * DEFAULT_LIMIT}`
  );

export default function TodoList() {
  const [page, setPage] = useState(1);

  const { data, status } = useQuery(
    ['todos', { page, limit: DEFAULT_LIMIT }],
    getTodoFetcher(page)
  );

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
            maxPage={Math.ceil(data.totalCount / DEFAULT_LIMIT)}
            currentPage={page}
            onChange={setPage}
          />
        </>
      )}
    </ul>
  );
}
