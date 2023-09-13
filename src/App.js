import React from 'react';
import TypingAnimation from './Component/TypingText';

function App() {
  const items = ['Hello developer', 'Hello coder', 'Hello programmer'];

  return (
   
    <div className="  bg-gray-800 h-screen w-full">
      <TypingAnimation items={items} />
    </div>
  
  );
}

export default App;
