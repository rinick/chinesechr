import React, {useMemo, useState} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {Char} from './char';

interface Props {}

const App = () => {
  const [history, setHistory] = useState(localStorage.getItem('chineseChrHistory') ?? '');
  const [text, setText] = useState(localStorage.getItem('chineseChrPending') ?? '');

  const changeHistory = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    localStorage.setItem('chineseChrHistory', e.target.value);
    setHistory(e.target.value);
  };
  const changeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    localStorage.setItem('chineseChrPending', e.target.value);
    setText(e.target.value);
  };
  const pages = useMemo(() => {
    let key = 0;
    const chars = text.split('');
    const pages: React.ReactElement[] = [];
    let page: React.ReactElement[] = [];

    function addPage() {
      if (pages.length) {
        pages.push(<div className="page-break" />);
      }
      pages.push(
        <div key={++key} className="page">
          {page}
        </div>
      );
      page = [];
    }

    const duplicate = new Set<string>();
    for (const char of chars) {
      if (char.charCodeAt(0) < 255) {
        // skip asc code during typing
        continue;
      }
      if (page.length >= 63) {
        addPage();
      }
      page.push(<Char key={++key} char={char} used={history.includes(char) || duplicate.has(char)} />);
      duplicate.add(char);
    }
    if (page.length) {
      addPage();
    }
    return pages;
  }, [text, history]);

  return (
    <>
      <div className="header">
        <textarea value={history} onChange={changeHistory} placeholder="历史字符，会在结果钟去除" />
        <textarea value={text} onChange={changeText} placeholder="输入字符，生成字卡" />
      </div>
      {pages}
    </>
  );
};

createRoot(document.getElementById('root')).render(<App />);
