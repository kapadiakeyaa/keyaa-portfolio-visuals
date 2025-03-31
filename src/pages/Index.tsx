
import React from 'react';
import GradientBackground from '@/components/GradientBackground';
import AnimatedName from '@/components/AnimatedName';
import ProjectGrid from '@/components/ProjectGrid';
import { projects } from '@/data/projects';

const Index = () => {
  // Convert projects data to format expected by ProjectGrid
  const projectCards = projects.map(project => ({
    id: project.id,
    title: project.title,
    category: project.category,
    thumbnail: project.thumbnail,
  }));

  return (
    <GradientBackground className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-20 flex-grow">
        <header className="mb-20 animate-fade-in">
          <AnimatedName name="Keyaa Kapadia" />
          <div className="mt-8 max-w-2xl">
            <p className="text-xl text-portfolio-deep-navy leading-relaxed">
              I'm a graphic designer specializing in creating intentional, structured, and effective visual solutions.
              With experience across UX design, web development, book design, and marketing, I bring a multidisciplinary approach to every project.
            </p>
          </div>
        </header>

        <main>
          <section className="mb-20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-semibold mb-6 text-portfolio-dark-blue">My Work</h2>
            <ProjectGrid projects={projectCards} />
          </section>
        </main>
      </div>
    </GradientBackground>
  );
};

export default Index;
