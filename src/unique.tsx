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
    const code = c.codePointAt(0);
    if (code > 256 && !(code >= 0x3000 && code <= 0x303f) && !(code >= 0xff00 && code <= 0xffff)) {
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
