import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  //  async function getData() {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  //   console.log(response)
  //   const data = await response.json()
  //   console.log(data);
  // }
  const [data, setData] = useState([]);
  const getData = async () => {
    // const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    const { data } = await axios.get('https://picsum.photos/v2/list');
    // console.log(data);
    setData(data);
  };

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function (ele, i) {
          return (
            <div key={ele.id}>
              <h2>{ele.author} </h2>
              <img src={ele.download_url} alt="img" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
