
import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

const TypewriterEffect = ({
  text,
  speed = 100,
  delay = 500,
  className = '',
}: TypewriterEffectProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isTyping, speed, text]);

  return (
    <span className={`inline-block ${className}`}>
      {displayText}
      {currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
};

export default TypewriterEffect;
