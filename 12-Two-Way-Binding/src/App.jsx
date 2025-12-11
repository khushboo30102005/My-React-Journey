import React, { useState } from 'react';

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form Submitted by ',title);
    setTitle('')
  };
  const [title, setTitle] = useState('')
  return (
    <div>
      <h1>Two way binding</h1>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          placeholder="Enter your name"
          value={title}
          onChange={(e) => {
           setTitle(e.target.value)}}
          name=""
          id=""
        />
        <button>submit Btn</button>
      </form>
    </div>
  );
};

export default App;
