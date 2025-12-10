import React from 'react';

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form submitted');
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input type="text" placeholder="Enter your name" name="" id="" />
        {/* <input type="email" placeholder="Enter your email" name="" id="" />
        <input
          type="number"
          placeholder="Enter your count"
          name=""
          id=""
        />{' '}
        <input type="password" placeholder="Enter Password" name="" id="" /> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
