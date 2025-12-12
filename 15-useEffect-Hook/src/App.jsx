import { useEffect, useState } from 'react';

const App = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(100);
  useEffect(function () {
    console.log('Num 1 is Updated...');
  }, [num]);
  useEffect(function() {
    console.log('Num 2 is Updated...');
  }, [num2])
  return (
    <div>
      <h1>Hello react</h1>
      <h1>Num 1: {num}</h1>
      <h1>Num 2: {num2}</h1>
      <button
        onMouseEnter={() => {
          setNum(num + 1);
        }}
        onMouseLeave={() => {
          setNum2(num2 + 10);
        }}
      >
        Update State
      </button>
    </div>
  );
};

export default App;
