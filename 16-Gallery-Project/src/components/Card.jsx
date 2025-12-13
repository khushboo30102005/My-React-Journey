import React from 'react';

const Card = ({elem, idx}) => {
  return (
    <div>
      <a  href={elem.url} target="_blank">
        <div>
          <div className="h-52 w-64  bg-white overflow-hidden rounded-2xl">
            <img
              className="w-full h-full object-cover"
              src={elem.download_url}
              alt="img"
            />
          </div>
          <h1 className="font-bold text-lg">{elem.author}</h1>
        </div>
      </a>
    </div>
  );
};

export default Card;
