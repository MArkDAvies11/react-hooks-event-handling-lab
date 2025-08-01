// src/components/EyesOnMe.js
import React from 'react';

function EyesOnMe() {
  const handleFocus = () => {
    console.log('Good!');
  };

  const handleBlur = () => {
    console.log('Hey! Eyes on me!');
  };

  return (
    <div>
      <button
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        Eyes on me
      </button>
    </div>
  );
}

export default EyesOnMe;// Code EyesOnMe Component Here
