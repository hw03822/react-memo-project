import { useState } from 'react';
import './App.css';
import MemoContainer from './components/MemoContainer';
import SideBar from './components/SideBar';

function App() {
  const [memos, setMemos] = useState([
    {
      title: 'Memo 1',
      content: 'This is memo1',
      createdAt: 1740717250347,
      updatedAt: 1740717250347,
    },
    {
      title: 'Memo 2',
      content: 'This is memo2',
      createdAt: 1740717287458,
      updatedAt: 1740717287458,
    },
  ]);

  return (
    <div className="App">
      <SideBar memos={memos} />
      <MemoContainer />
    </div>
  );
}

export default App;
