import React from 'react';

const App = () => {
  const btnClick = () => {
    console.log('Btn Clicked');
  };

  const inputVal = (val) => {
    console.log(val);
  };
  const pageWheel = (val) => {
    console.log("Page Scrolling at speed: ",val);
  };
  return (
    <div>
      {/* <h1>Hello React</h1>
      <button onClick={btnClick}>Click Btn</button>
      <input
        onChange={(e) => {
          inputVal(e.target.value);
        }}
        type="text"
        placeholder="Enter your name"
      />
      <div id="box" onMouseMove={(e) => console.log(e.clientX)}></div> */}
      <div onWheel={(e) => pageWheel(e.deltaY)}>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>
    </div>
  );
};

export default App;
