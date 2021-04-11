import React from 'react';

import './../App.css';
import CheckBox from './CheckBox';
import Paragraph from './Paragraph'
import './../../src/styles.css'

function TodoItem() {
  return (
    <div className="todo-item">
      <CheckBox />
      <Paragraph />
    </div>
  );
}

export default TodoItem;
