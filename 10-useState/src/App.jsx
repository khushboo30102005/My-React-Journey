import React, { useState } from 'react';
import Counter from './components/Counter';

const App = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState('Khushboo');
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  let [obj, setObj] = useState({ name: 'Khushboo', age: 20 });
  function changeUser() {
    setCount(count + 1);
    setUser('KHUSHBOO SAINI');
    setArr([9, 8, 7, 6]);
    console.log(count);
  }
  const updateUser = () => {
    // console.log(obj);
    // const newObj = { ...obj };
    // newObj.name = 'KHUSHI SAINI';
    // newObj.age = 22;
    // console.log(newObj);
    // setObj(newObj);

    setObj((prev) => ({ ...prev, name: 'Khushi', age: 22 }));
  };

  const updateArr = () => {
    const newArr = [...arr];
    console.log(arr);
    newArr.push(10);
    console.log(newArr);
    setArr(newArr);
  };
  return (
    <div>
      {/* <h1>{count}</h1>
      <h2>{user}</h2>
      
      <button onClick={changeUser}>Change count</button> 
      
        <h2>{obj.name} {obj.age} </h2>
        <button onClick={updateUser}>Update user </button> 
      <h3>{arr}</h3>
      <button onClick={updateArr}>updateArr</button>*/}
      <Counter />
    </div>
  );
};

export default App;
