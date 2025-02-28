import React from 'react';

export default function MemoList({ memos }) {
  return (
    <>
      {memos.map((memo, index) => (
        <div key={index}>{memo.title}</div>
      ))}
    </>
  );
}
