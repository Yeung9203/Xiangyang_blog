import React from 'react';

const ImagePlaceholder = ({ width, height, text }) => {
  return (
    <div 
      className="bg-gray-800 flex items-center justify-center"
      style={{ width, height }}
    >
      <span className="text-gray-400">{text}</span>
    </div>
  );
};

export default ImagePlaceholder; 