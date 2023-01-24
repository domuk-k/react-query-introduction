import React from 'react';

const todo = {
  id: 'mock-id',
  title: 'Todo 목데이터',
  done: false,
  description: 'mock-description',
};

function TodoDetail() {
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
