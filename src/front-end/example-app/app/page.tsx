"use client"; // This directive makes the component a Client Component

import React from 'react';

const Home: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Click Me!
      </button>
    </div>
  );
};

export default Home;