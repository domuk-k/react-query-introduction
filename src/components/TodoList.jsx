import React from 'react';
import { TodoItem } from './TodoItem';

// import createQueryFn from '../util/fetcher'

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

// useQuery에 전달할 쿼리함수를 생성하세요
// const fetchTodos = createQueryFn('/todos');

export default function TodoList() {
  /**
   * 여기서 useQuery를 사용하세요.
   * 6번 줄의 todoData를 제거하고, useQuery로 가져온 데이터로 목록을 렌더링하세요.
   */

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
