
import React, { useState } from 'react';
import ProjectCard, { ProjectCardProps } from './ProjectCard';

interface ProjectGridProps {
  projects: ProjectCardProps[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  
  // Assign grid positions based on project type to create visual hierarchy
  const getProjectClass = (project: ProjectCardProps, index: number): string => {
    if (project.category === 'UX Case Study') {
      return index % 3 === 0 ? 'large' : 'wide';
    } else if (project.category === 'Website') {
      return 'tall';
    } else if (project.category === 'Book Design' && index % 4 === 0) {
      return 'large';
    }
    return '';
  };

  const handleProjectClick = (id: string) => {
    setActiveProjectId(id);
    // Reset after animation completes
    setTimeout(() => {
      setActiveProjectId(null);
    }, 800);
  };

  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <div 
          key={project.id}
          className={`project-item ${getProjectClass(project, index)} ${activeProjectId === project.id ? 'active' : ''}`}
          onClick={() => handleProjectClick(project.id)}
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
