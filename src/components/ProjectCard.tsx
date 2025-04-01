
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  isFlipped?: boolean;
  isNameCard?: boolean;
  className?: string;
}

const ProjectCard = ({ 
  id, 
  title, 
  category, 
  thumbnail, 
  isFlipped = false,
  isNameCard = false,
  className 
}: ProjectCardProps) => {
  
  // Render special name card with flip effect
  if (isNameCard) {
    return (
      <div 
        className={cn(
          "relative w-full h-full perspective-1000",
          className
        )}
      >
        <motion.div 
          className="w-full h-full rotate-y-0 preserve-3d transition-transform duration-500"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Front side (Name) */}
          <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-portfolio-dark-blue to-portfolio-deep-navy rounded-lg overflow-hidden">
            <div className="flex flex-col justify-center items-center h-full p-8 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 name-display">Keyaa Kapadia</h1>
              <p className="text-portfolio-lavender-gray text-lg">Click to learn more</p>
            </div>
          </div>
          
          {/* Back side (Bio) */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-portfolio-lavender-gray/20 to-portfolio-muted-gray/20 backdrop-blur-sm rounded-lg overflow-hidden">
            <div className="flex flex-col justify-center items-center h-full p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">About Me</h2>
              <p className="text-white text-lg max-w-md">
                Graphic designer specializing in creating intentional, structured, and effective visual solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
  
  // Regular project card
  return (
    <Link 
      to={`/project/${id}`}
      className={cn(
        "group block relative overflow-hidden rounded-lg transition-all duration-500 hover-glow h-full w-full",
        className
      )}
    >
      <div className="h-full w-full overflow-hidden bg-muted">
        <img 
          src={thumbnail} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-80 transition-opacity duration-300">
        <div className="absolute bottom-0 w-full p-6 text-white">
          <p className="text-sm uppercase tracking-wider text-portfolio-lavender-gray">{category}</p>
          <h3 className="mt-1 text-2xl font-medium">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
