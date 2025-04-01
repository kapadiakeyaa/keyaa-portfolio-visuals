
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  description?: string;
}

interface StackedProjectCardsProps {
  projects: Project[];
}

const StackedProjectCards: React.FC<StackedProjectCardsProps> = ({ projects }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Reset card position when mouse leaves the container
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleCardClick = (index: number) => {
    // If clicking the name card (first card), flip it
    if (index === 0) {
      setIsFlipped(!isFlipped);
      setActiveCard(index);
      // Set a timeout to remove the active state after animation completes
      setTimeout(() => setActiveCard(null), 1000);
    }
  };

  // Determine the transforms for each card based on hover state
  const getCardStyle = (index: number) => {
    // Base position - cards are stacked with slight offset
    const baseTransform = `translateY(${index * 20}px)`;
    const baseZIndex = projects.length - index;
    
    if (hoveredIndex === null) {
      // Default stacked position
      return {
        transform: baseTransform,
        zIndex: baseZIndex,
      };
    }
    
    if (index === hoveredIndex) {
      // Hovered card comes forward - more drastic animation
      return {
        transform: `translateY(${index * 20}px) scale(1.1) translateZ(60px)`,
        zIndex: projects.length + 1,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
      };
    } else if (index < hoveredIndex) {
      // Cards above the hovered card move higher - more drastic
      return {
        transform: `translateY(${index * 20 - 30}px)`,
        zIndex: baseZIndex,
      };
    } else {
      // Cards below the hovered card move lower - more drastic
      return {
        transform: `translateY(${index * 20 + 30}px)`,
        zIndex: baseZIndex,
      };
    }
  };

  return (
    <div 
      className="stacked-cards-container w-full max-w-4xl mx-auto h-[80vh] relative perspective-1000"
      onMouseLeave={handleMouseLeave}
    >
      {projects.map((project, index) => {
        // Determine if this is the name card
        const isNameCard = index === 0;
        
        return (
          <div
            key={project.id}
            ref={el => cardsRef.current[index] = el}
            className={`absolute w-full bg-white border border-gray-200 rounded-lg overflow-hidden preserve-3d transition-all duration-500 ease-in-out 
              ${activeCard === index ? 'card-active' : ''}`}
            style={{
              height: '500px', // Increased card height
              ...getCardStyle(index),
              transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onClick={() => handleCardClick(index)}
          >
            {isNameCard ? (
              // Name card with flip effect - black background
              <div className="relative w-full h-full preserve-3d">
                {/* Front of card (Name) */}
                <motion.div 
                  className={`absolute w-full h-full backface-hidden p-6 flex flex-col justify-center items-center bg-black hover-glow
                    ${isFlipped ? 'rotate-y-180' : 'rotate-y-0'}`}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <h1 className="text-5xl md:text-6xl font-bold text-white name-display mb-2">
                    {project.title}
                  </h1>
                  <p className="text-2xl text-gray-400 mt-2">{project.category}</p>
                </motion.div>

                {/* Back of card (Bio) */}
                <motion.div 
                  className={`absolute w-full h-full backface-hidden p-6 flex flex-col justify-center items-center bg-black hover-glow
                    ${isFlipped ? 'rotate-y-0' : 'rotate-y-180'}`}
                  animate={{ rotateY: isFlipped ? 0 : -180 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <h2 className="text-2xl font-semibold mb-4 text-white">About Me</h2>
                  <p className="text-lg text-gray-300 text-center">
                    I'm a passionate graphic designer specializing in UX/UI design, branding, 
                    and book design. My work combines creativity with strategic thinking to 
                    deliver impactful visual experiences.
                  </p>
                </motion.div>
              </div>
            ) : (
              // Regular project cards
              <Link 
                to={`/project/${project.id}`} 
                className="block w-full h-full hover-glow"
              >
                <div className="relative w-full h-full">
                  {/* Background image with overlay */}
                  <div 
                    className="absolute inset-0 bg-center bg-cover"
                    style={{ 
                      backgroundImage: `url(${project.thumbnail})`,
                    }}
                  />
                  
                  {/* Light overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/90" />
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-portfolio-dark-blue mb-2">
                      {project.title}
                    </h2>
                    <p className="text-portfolio-muted-gray text-lg">
                      {project.category}
                    </p>
                  </div>
                </div>
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StackedProjectCards;
