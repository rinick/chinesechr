import React, {useMemo, useState} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';

const App = () => {
  const [input, setInput] = useState(localStorage.getItem('chineseChrUnique') ?? '');

  const onChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    localStorage.setItem('chineseChrUnique', e.target.value);
    setInput(e.target.value);
  };
  const chrSet = new Set<string>();
  for (let c of input) {
    if (c.charCodeAt(0) > 256) {
      chrSet.add(c);
    }
  }
  const charList = [...chrSet.values()];
  charList.sort((a, b) => Math.random() - 0.5);

  return (
    <>
      <div className="header">
        <textarea value={input} onChange={onChangeInput} placeholder="随机排列字符，每个字符只出现一次" />
        <textarea value={charList.join(' ')} />
      </div>
    </>
  );
};

createRoot(document.getElementById('root')).render(<App />);
