import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import Button from './components/Button';

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  async function getData() {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    );
    setUserData(response.data);
  }
  let printUserData = (
    <h3 className="text-gray-500 absolute top-1/2 left-1/2 -translate-x-1/2 text-3xl font-bold -translate-y-1/2">
      LOADING...
    </h3>
  );
  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return <Card key={idx} elem={elem} idx={idx} />;
    });
  }

  useEffect(
    function () {
      getData();
    },
    [index]
  );
  return (
    <div className="bg-black min-h-screen h-full text-white">
      <div className="flex gap-8 min-h-144 items-center justify-center flex-wrap ">
        {printUserData}
      </div>
      <div className="flex justify-center items-center">
        <Button step='<<'
          style = {{opacity: index==1? 0.5: 1}}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
        />
        <h3>Page {index}</h3>
        <Button step=">>"
          onClick={() => {
            setIndex(index + 1);
            setUserData([]);
          }}
        />
      </div>
    </div>
  );
};

export default App;
