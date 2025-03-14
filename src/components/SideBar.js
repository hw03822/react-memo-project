import React from 'react';
import MemoList from './MemoList';
import SideBarHeader from './SideBarHeader';
import SideBarFooter from './SideBarFooter';

export default function SideBar({
  memos,
  addMemo,
  selectedMemoIndex,
  setSelectedMemoIndex,
}) {
  return (
    <div className="SideBar">
      <SideBarHeader />
      <MemoList
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
      />
      <SideBarFooter onClick={addMemo} />
    </div>
  );
}
