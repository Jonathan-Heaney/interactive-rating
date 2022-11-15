import React from 'react';
import img from './icon-star.svg';
import { QuestionText } from './QuestionText';

export function Main() {
  return (
    <div id="main">
      <img src={img} alt="star icon"></img>
      <QuestionText></QuestionText>
    </div>
  );
}
