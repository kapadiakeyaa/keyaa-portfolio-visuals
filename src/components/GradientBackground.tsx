
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

// Array of gradient combinations using our color palette
const backgroundGradients = [
  'from-portfolio-light-gray via-portfolio-lavender-gray to-portfolio-muted-gray',
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
      `min-h-screen bg-gradient-to-br ${gradient} gradient-background`,
      className
    )}>
      {children}
    </div>
  );
};

export default GradientBackground;
