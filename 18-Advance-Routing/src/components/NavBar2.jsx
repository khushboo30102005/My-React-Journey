import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar2 = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button
        onClick={() => navigate('/')}
        className="bg-emerald-700 px-4 py-3 m-4 rounded-2xl"
      >
        Go To Home
      </button>
      <button
        onClick={() => navigate(-1)}
        className="bg-emerald-700 px-4 py-3 m-4 rounded-2xl"
      >
        Back
      </button>
      <button
        onClick={() => navigate(1)}
        className="bg-emerald-700 px-4 py-3 m-4 rounded-2xl"
      >
        Next
      </button>
    </div>
  );
};

export default NavBar2;
