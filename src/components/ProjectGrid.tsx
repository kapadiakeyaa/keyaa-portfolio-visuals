
import React, { useState } from 'react';
import ProjectCard, { ProjectCardProps } from './ProjectCard';
import { motion } from 'framer-motion';

interface ProjectGridProps {
  projects: ProjectCardProps[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleHover = (index: number | null) => {
    setHoveredIndex(index);
  };

  const handleCardClick = (index: number) => {
    setActiveCard(index === activeCard ? null : index);
  };

  // The first card will be the name card that flips to show bio
  const isNameCard = (index: number) => index === 0;
  
  return (
    <div className="project-stack-container">
      {projects.map((project, index) => {
        // Calculate position based on hover state
        const getYOffset = () => {
          if (hoveredIndex === null) return index * 40; // Default stacking
          
          if (index === hoveredIndex) return index * 40; // Keep hovered card in place
          if (index < hoveredIndex) return (index * 40) - 20; // Move cards above up
          return (index * 40) + 20; // Move cards below down
        };
        
        return (
          <motion.div 
            key={project.id}
            className="project-stack-card"
            initial={{ y: index * 40, zIndex: projects.length - index }}
            animate={{ 
              y: getYOffset(),
              zIndex: hoveredIndex === index ? 100 : projects.length - index,
              scale: hoveredIndex === index ? 1.05 : 1,
              boxShadow: hoveredIndex === index 
                ? '0 15px 30px rgba(190, 178, 200, 0.4)'
                : '0 5px 20px rgba(0, 0, 0, 0.2)'
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onHoverStart={() => handleHover(index)}
            onHoverEnd={() => handleHover(null)}
            onClick={() => isNameCard(index) ? handleCardClick(index) : null}
          >
            <ProjectCard
              id={project.id}
              title={project.title}
              category={project.category}
              thumbnail={project.thumbnail}
              isFlipped={isNameCard(index) && activeCard === index}
              isNameCard={isNameCard(index)}
              className="h-full w-full"
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProjectGrid;
