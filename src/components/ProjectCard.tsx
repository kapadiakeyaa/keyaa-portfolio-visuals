
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  className?: string;
}

const ProjectCard = ({ id, title, category, thumbnail, className }: ProjectCardProps) => {
  return (
    <Link 
      to={`/project/${id}`}
      className={cn(
        "group relative overflow-hidden rounded-md shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        className
      )}
    >
      <div className="aspect-square overflow-hidden bg-portfolio-light-gray">
        <img 
          src={thumbnail} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-portfolio-deep-navy/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute bottom-0 w-full p-4 text-white">
          <p className="text-xs uppercase tracking-wider opacity-80">{category}</p>
          <h3 className="mt-1 text-lg font-medium">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
