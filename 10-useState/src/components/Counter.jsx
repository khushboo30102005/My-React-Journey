import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    // Right way to change Three times ==>  called batch update
    setCount(prev => (prev + 1))  
    setCount(prev => (prev + 1))  
    setCount(prev => (prev + 1))  
  }
  
  const decrease = () => {
    setCount(count-1)
  }
  const increaseBy5 = () => {
    setCount(count+5)
  }
  return (
    <div>
      <div className='count'>{count}</div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={increaseBy5}>add 5</button>
    </div>
  );
};

export default Counter;
