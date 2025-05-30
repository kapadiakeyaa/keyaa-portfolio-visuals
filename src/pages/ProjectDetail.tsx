
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { projects } from '@/data/projects';
import { ArrowLeft } from 'lucide-react';
import GradientBackground from '@/components/GradientBackground';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-white">Project Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-portfolio-dark-blue text-white rounded-md hover:bg-portfolio-deep-navy transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <GradientBackground>
        <Navbar />
        <div className="container mx-auto px-4 pt-24 pb-16">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-portfolio-lavender-gray mb-8 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Projects
          </button>
          
          <header className="mb-12">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{project.title}</h1>
              <p className="text-lg text-portfolio-lavender-gray">{project.category}</p>
            </div>
          </header>
          
          <main className="max-w-4xl mx-auto">
            <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-xl leading-relaxed text-white">
                {project.content.introduction}
              </p>
            </div>
            
            <div className="space-y-16">
              {project.content.images.map((image, index) => (
                <div 
                  key={index} 
                  className="animate-fade-in hover-glow"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="bg-muted p-2 shadow-lg rounded-md overflow-hidden hover:shadow-portfolio-lavender-gray/20 transition-shadow duration-300">
                    <img 
                      src={image.url} 
                      alt={`Project image ${index + 1}`} 
                      className="w-full h-auto rounded-sm"
                    />
                  </div>
                  <p className="mt-4 text-portfolio-lavender-gray italic">{image.caption}</p>
                </div>
              ))}
            </div>
          </main>
        </div>
      </GradientBackground>
    </div>
  );
};

export default ProjectDetail;
