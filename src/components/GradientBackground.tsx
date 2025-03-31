
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

// Array of gradient combinations using our color palette
const backgroundGradients = [
  'from-portfolio-dark-blue via-portfolio-lavender-gray to-portfolio-muted-gray',
  'from-portfolio-lavender-gray via-portfolio-muted-gray to-portfolio-deep-navy',
  'from-portfolio-muted-gray via-portfolio-light-gray to-portfolio-dark-blue',
  'from-portfolio-light-gray via-portfolio-dark-blue to-portfolio-deep-navy',
];

const GradientBackground = ({ 
  children,
  className
}: { 
  children: React.ReactNode;
  className?: string;
}) => {
  const [gradient, setGradient] = useState('');

  useEffect(() => {
    // Choose a random gradient on mount
    const randomIndex = Math.floor(Math.random() * backgroundGradients.length);
    setGradient(backgroundGradients[randomIndex]);
  }, []);

  return (
    <div className={cn(
      `relative min-h-screen overflow-hidden`,
      className
    )}>
      <div className="absolute inset-0 bg-black opacity-90 z-0"></div>
      <div className={cn(
        `absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 animate-gradient-shift z-0`,
        className
      )}></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GradientBackground;
