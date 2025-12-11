import React, { useState } from 'react';
import { X } from 'lucide-react';

const App = () => {
  const [heading, setHeading] = useState('');
  const [notes, setNotes] = useState('');
  const [task, setTask] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );
  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ heading, notes });
    setTask(copyTask);
    localStorage.setItem('tasks', JSON.stringify(copyTask));
    setHeading('');
    setNotes('');
  };

  const deleteNote = (i) => {
    const copyTask = [...task];
    copyTask.splice(i, 1);
    setTask(copyTask);
    localStorage.setItem('tasks', JSON.stringify(copyTask));
  };
  return (
    <div className=" h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex h-1/2 lg:h-screen lg:w-1/2 flex-col gap-2 lg:gap-10 p-10"
      >
        <h1 className="text-3xl font-semibold mb-5">Add Note</h1>
        <input
          onChange={(e) => setHeading(e.target.value)}
          className="px-5 py-2 border-2 font-medium outline-none rounded  "
          type="text"
          value={heading}
          placeholder="Enter Notes Heading"
        />
        <textarea
          className="px-5 py-2 border-2 font-medium outline-none rounded h-32 lg:h-52 "
          name=""
          id=""
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
          placeholder="Enter Details"
        ></textarea>
        <button className="bg-white text-black font-medium  px-5 py-2 rounded active:bg-gray-400 active:scale-95 ">
          Add Notes
        </button>
      </form>
      <div className=" lg:w-1/2 border-t-2 lg:border-t-0 lg:border-l-2 p-10">
        <h1 className="text-3xl font-semibold mb-5">Your Notes</h1>
        <div
          id="scrollBar"
          className="flex lg:flex-wrap items-start justify-start lg:h-[600px]  w-full overflow-auto gap-10"
        >
          {task.map(function (ele, i) {
            return (
              <div
                key={i}
                className="relative bg-cover bg-[url('https://pngimg.com/uploads/sticky_note/sticky_note_PNG18952.png')] shrink-0  h-55 w-75 lg:h-82 lg:w-75 p-10 text-black rounded-xl"
              >
                <h3
                  onClick={() => deleteNote(i)}
                  className="absolute top-8 right-5 bg-red-500 shadow-[1px 1px 1px 1px] p-1 active:scale-95 cursor-pointer rounded-full text-xs"
                >
                  <X strokeWidth={3} />
                </h3>
                <h2 className="leading-tight font-bold text-[18px] ">
                  {ele.heading}
                </h2>
                <p className="mt-2 leading-tight font-medium text-xs lg:text-base text text-gray-800">
                  {ele.notes}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
