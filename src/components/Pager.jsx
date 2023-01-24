import React from 'react';

const PAGER_VIEW_PORT = 10;

const getRange = (start = 0, end = 0) =>
  Array.from({ length: end - start }, (_, index) => index + start);

export default function Pager({ currentPage = 1, maxPage, onChange }) {
  if (!maxPage || maxPage < 0 || currentPage < 0) return null;

  if (maxPage < currentPage) {
    if (process.env.NODE_ENV !== 'production') {
      throw new Error('currentPage exceeds maxPage');
    }
  }

  const pageNumbers = (
    Math.max(0, currentPage - PAGER_VIEW_PORT / 2)
      ? Math.min(maxPage, currentPage + PAGER_VIEW_PORT / 2) === maxPage
        ? getRange(Math.max(0, maxPage - PAGER_VIEW_PORT), maxPage)
        : getRange(
            currentPage - PAGER_VIEW_PORT / 2,
            currentPage + PAGER_VIEW_PORT / 2
          )
      : getRange(0, Math.min(maxPage, PAGER_VIEW_PORT))
  ).map((index) => index + 1);

  return (
    <PagerContainer>
      <button onClick={() => onChange(0)}>{'<'}</button>
      {pageNumbers.map((number) => (
        <PageNumberButton
          isActive={number === currentPage}
          onClick={() => onChange(number)}
        >
          {number}
        </PageNumberButton>
      ))}
      <button onClick={() => onChange(maxPage)}>{'>'}</button>
    </PagerContainer>
  );
}

function PagerContainer({ children }) {
  return (
    <div
      style={{
        padding: '6px 25%',
        fontSize: '12px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {children}
    </div>
  );
}

function PageNumberButton({ isActive, children, onClick }) {
  return (
    <button
      style={{
        fontWeight: isActive ? 'bold' : 'lighter',
        cursor: 'pointer',
        borderRadius: '3px',
        backgroundColor: isActive ? '#fff' : '#efefef',
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
