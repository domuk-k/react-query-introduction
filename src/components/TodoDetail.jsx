import { useQuery } from '@tanstack/react-query';
import React from 'react';

import createQueryFn from '../util/createQueryFn';
import Loading from './Loading';

/**
 * 이 컴포넌트는 외부로 부터 todo개체의 id를 받아서 해당 id로 todo상세정보를 조회하고, 표현합니다.
 */
function TodoDetail({ id }) {
  const {
    data: todo,
    status,
    error,
  } = useQuery(['todos', id], createQueryFn(`/todo/${id}`));

  if (status === 'loading') {
    return <Loading />;
  }

  if (status === 'error') {
    return (
      <section>
        상세 정보 조회중 에러가 발생했습니다'
        <span>{error.message}</span>
      </section>
    );
  }

  return (
    <>
      <section className="todo-detail-header">
        {todo.done && <div> ✅ </div>}
        <h2 className="todo-detail-title">{todo.title}</h2>
        <button type="button" className="todo-detail-update">
          수정
        </button>
      </section>
      <div className="todo-detail-description">{todo.description}</div>
    </>
  );
}

export default TodoDetail;
