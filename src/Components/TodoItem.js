import React from 'react';

import './../App.css';
import CheckBox from './CheckBox';
import Paragraph from './Paragraph'

function TodoItem() {
  return (
    <div className="App">
      <CheckBox />
      <Paragraph />
    </div>
  );
}

export default TodoItem;
