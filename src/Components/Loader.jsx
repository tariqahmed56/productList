import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex space-x-3">
        <div className="w-4 h-4 rounded-full animate-gradient"></div>
        <div className="w-4 h-4 rounded-full animate-gradient delay-100"></div>
        <div className="w-4 h-4 rounded-full animate-gradient delay-200"></div>
      </div>
    </div>
  );
};

export default Loader;
