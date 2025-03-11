import React from 'react';

export default function MemoContainer({ memo, setMemo }) {
  return (
    <div className="MeomoContainer">
      <div>
        <input
          type="text"
          className="MeomoContainer_title"
          value={memo.title}
          onChange={(e) => {
            setMemo({
              ...memo,
              title: e.target.value,
              updatedAt: new Date().getTime(),
            });
          }}
        />
      </div>
      <div>
        <textarea
          className="MeomoContainer_content"
          value={memo.content}
          onChange={(e) => {
            setMemo({
              ...memo,
              content: e.target.value,
              updatedAt: new Date().getTime(),
            });
          }}
        />
      </div>
    </div>
  );
}
