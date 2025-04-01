
import React from 'react';
import { projects } from '@/data/projects';
import GradientBackground from '@/components/GradientBackground';
import StackedProjectCards from '@/components/StackedProjectCards';

const Index = () => {
  // Create a name card to add at the beginning of the projects array
  const nameCard = {
    id: 'name-card',
    title: 'Keyaa Kapadia',
    category: 'Graphic Designer',
    thumbnail: '', // Not needed for name card
  };

  // Convert projects data to format expected by StackedProjectCards
  const projectCards = [
    nameCard, // Add the name card as the first item
    ...projects.map(project => ({
      id: project.id,
      title: project.title,
      category: project.category,
      thumbnail: project.thumbnail,
    }))
  ];

  return (
    <div className="min-h-screen bg-black">
      <GradientBackground className="h-full min-h-screen">
        <div className="container mx-auto px-4 py-10">
          <main className="h-screen flex items-center justify-center">
            <section className="animate-fade-in w-full" style={{ animationDelay: '0.2s' }}>
              <StackedProjectCards projects={projectCards} />
            </section>
          </main>
        </div>
      </GradientBackground>
    </div>
  );
};

export default Index;
