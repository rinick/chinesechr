import React from 'react';
import {toTraditionalChar} from './cn-chars/cn-chars';

interface Props {
  char: string;
  used: boolean;
}

export const Char = ({char, used}: Props) => {
  const tchar = toTraditionalChar(char);
  return (
    <div className={used ? 'char red' : 'char'}>
      <div className="char1">{char}</div>
      <div className="char2">{char}</div>
      <div className="char3">{tchar}</div>
      <div className="char4">{tchar}</div>
    </div>
  );
};
