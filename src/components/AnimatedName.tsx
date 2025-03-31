
import React, { useEffect, useState } from 'react';

// Array of gradient combinations using our color palette
const gradientCombinations = [
  'from-portfolio-dark-blue to-portfolio-lavender-gray',
  'from-portfolio-deep-navy to-portfolio-muted-gray',
  'from-portfolio-lavender-gray to-portfolio-light-gray',
  'from-portfolio-muted-gray to-portfolio-dark-blue',
  'from-portfolio-light-gray to-portfolio-deep-navy',
];

const AnimatedName = ({ name }: { name: string }) => {
  const [gradients, setGradients] = useState<string[]>([]);

  useEffect(() => {
    // Create a random gradient for each letter
    const newGradients = Array.from({ length: name.length }, () => {
      const randomIndex = Math.floor(Math.random() * gradientCombinations.length);
      return gradientCombinations[randomIndex];
    });
    
    setGradients(newGradients);
  }, [name]);

  return (
    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-portfolio-deep-navy relative">
      {name.split('').map((letter, index) => (
        <span key={index} className="name-letter">
          {letter !== ' ' ? (
            <>
              <span className={`letter-gradient bg-gradient-to-br ${gradients[index]}`}></span>
              {letter}
            </>
          ) : (
            ' '
          )}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedName;
