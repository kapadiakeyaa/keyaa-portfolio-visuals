
import React from 'react';
import ProjectCard, { ProjectCardProps } from './ProjectCard';

interface ProjectGridProps {
  projects: ProjectCardProps[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <div className="projects-stack">
      {projects.map((project) => (
        <div 
          key={project.id}
          className="project-stack-item"
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
