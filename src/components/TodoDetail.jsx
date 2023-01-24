import React from 'react';

const todo = {
  id: 'mock-id',
  title: 'Todo 목데이터',
  done: false,
  description: 'mock-description',
};

/**
 * 이 컴포넌트는 외부로 부터 todo개체의 id를 받아서 해당 id로 todo상세정보를 조회하고, 표현합니다.
 */
function TodoDetail() {
  // id를 props으로 받아오고, useQuery를 사용해서, `todo.description` 정보가 포함된 UI를 표현하세요.
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
