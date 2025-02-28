import React from 'react';

export default function MemoContainer() {
  return (
    <div className="MeomoContainer">
      <div>
        <input type="text" className="MeomoContainer_title" />
      </div>
      <div>
        <textarea className="MeomoContainer_content" />
      </div>
    </div>
  );
}
