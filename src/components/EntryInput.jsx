import React from 'react';

export default function EntryInput() {
  return (
    <div className="entry-layout">
      <input className="entry-input" type="text" placeholder="할일 추가하기" />
      <button className="entry-submit-button">
        <PlusIcon />
        <span>Add</span>
      </button>
    </div>
  );
}

function PlusIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" /> <circle cx="12" cy="12" r="9" />{' '}
      <line x1="9" y1="12" x2="15" y2="12" />{' '}
      <line x1="12" y1="9" x2="12" y2="15" />
    </svg>
  );
}
