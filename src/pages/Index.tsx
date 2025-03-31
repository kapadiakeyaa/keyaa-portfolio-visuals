
import React from 'react';
import ProjectGrid from '@/components/ProjectGrid';
import { projects } from '@/data/projects';
import GradientBackground from '@/components/GradientBackground';

const Index = () => {
  // Convert projects data to format expected by ProjectGrid
  const projectCards = projects.map(project => ({
    id: project.id,
    title: project.title,
    category: project.category,
    thumbnail: project.thumbnail,
  }));

  return (
    <div className="min-h-screen bg-black">
      <GradientBackground className="h-full min-h-screen">
        <div className="container mx-auto px-4 py-10">
          {/* Header with name in top right and intro */}
          <header className="flex flex-col items-end mb-16 pt-6 animate-fade-in">
            <div className="text-right">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Keyaa Kapadia</h1>
              <p className="text-portfolio-lavender-gray text-lg max-w-md">
                Graphic designer specializing in creating intentional, structured, and effective visual solutions.
              </p>
            </div>
          </header>

          <main>
            <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <ProjectGrid projects={projectCards} />
            </section>
          </main>
        </div>
      </GradientBackground>
    </div>
  );
};

export default Index;
