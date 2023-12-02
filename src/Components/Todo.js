import "./Todo.css";
import List from "./List";
import React, { useState } from 'react';


function Todo() {
    const [Input, setInput] = useState('')
  return (
    <div>
      <div className="card">
        <div className="card-header text-center"><strong>To-Do</strong></div>
        <div className="card-body">
          <List Input={Input} setInput={setInput} />
        </div>
      </div>
    </div>
  );
}

export default Todo;
