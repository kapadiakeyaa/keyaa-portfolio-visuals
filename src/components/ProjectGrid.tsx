
import React from 'react';
import ProjectCard, { ProjectCardProps } from './ProjectCard';

interface ProjectGridProps {
  projects: ProjectCardProps[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          title={project.title}
          category={project.category}
          thumbnail={project.thumbnail}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
