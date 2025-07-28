// src/components/Keypad.js
import React from 'react';

function Keypad() { // This is the ONLY declaration of Keypad
  const handleChange = (event) => {
    // You can access the input value via event.target.value if needed later
    // console.log('Current value:', event.target.value);
    console.log('Entering password...');
  };

  return (
    <div>
      <label htmlFor="passwordInput">Password:</label>
      <input
        id="passwordInput"
        type="password"
        onChange={handleChange}
      />
    </div>
  );
}

export default Keypad;