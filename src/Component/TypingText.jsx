import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [loop, setLoop] = useState(true);

  useEffect(() => {
    const currentText = items[currentIndex];
    const textLength = currentText.length;

    if (typedText.length < textLength) {
      const timeout = setTimeout(() => {
        setTypedText(currentText.slice(0, typedText.length + 1));
      }, 200); // Adjust the typing speed as needed (in milliseconds).

      return () => clearTimeout(timeout);
    }

    // After typing the current item, move to the next item in the array or loop back to the first item
    if (typedText === currentText) {
      const timeout = setTimeout(() => {
        if (currentIndex < items.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else {
          setCurrentIndex(0);
        }
        setTypedText('');
      }, 1000); // Adjust the delay between items as needed (in milliseconds).

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, typedText, items]);

  return (
    <div>
      <span className="text-white text-2xl ml-[48%]">{typedText}</span>
    </div>
  );
};

export default TypingAnimation;
