import React from 'react';

function Card({ title, description, imageUrl }) {
  return (
    <div className="max-w-sm mx-10 shadow-lg my-5 self-center rounded-3xl mt-14 h-[27em] md:h-[25em] transition-transform transform hover:scale-105">
      <img className="w-full object-cover rounded-t-2xl h-[15em]" src={imageUrl} alt={title} />
      <div className="px-6 py-4 mt-5">
        <div className="font-bold text-xl mb-2 text-green-400">{title}</div>
        <p className="text-gray-700 text-base font-medium">{description}</p>
      </div>
    </div>
  );
}

export default Card;
