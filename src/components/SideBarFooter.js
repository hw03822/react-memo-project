import React from 'react';

export default function SideBarFooter({ onClick }) {
  return (
    <div className="SideBarFooter">
      <button className="SideBarFooter_add-button" onClick={onClick}>
        +
      </button>
    </div>
  );
}
