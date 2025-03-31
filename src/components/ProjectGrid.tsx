
import React from 'react';
import ProjectCard, { ProjectCardProps } from './ProjectCard';

interface ProjectGridProps {
  projects: ProjectCardProps[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <div className="project-stack-container">
      {projects.map((project, index) => (
        <div 
          key={project.id}
          className="project-stack-card"
          style={{ 
            zIndex: projects.length - index,
            top: `${index * 20}px`
          }}
        >
          <ProjectCard
            id={project.id}
            title={project.title}
            category={project.category}
            thumbnail={project.thumbnail}
            className="h-full w-full"
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
