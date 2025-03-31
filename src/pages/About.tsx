
import React from 'react';
import GradientBackground from '@/components/GradientBackground';
import Navbar from '@/components/Navbar';

const About = () => {
  return (
    <GradientBackground>
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <header className="mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-portfolio-deep-navy mb-6">About Me</h1>
          </header>
          
          <main className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl leading-relaxed text-portfolio-deep-navy">
              I'm Keyaa Kapadia, a graphic designer with a passion for creating clean, structured, and intentional visual solutions. My approach combines analytical thinking with creative intuition to develop designs that are both aesthetically pleasing and functionally effective.
            </p>
            
            <p className="text-xl leading-relaxed text-portfolio-deep-navy">
              With experience spanning UX design, web development, book design, and marketing, I bring a multidisciplinary perspective to every project. I believe that good design solves problems and creates meaningful connections between brands and their audiences.
            </p>
            
            <p className="text-xl leading-relaxed text-portfolio-deep-navy">
              My design philosophy centers around minimalism, thoughtful typography, and purposeful use of color and space. I'm constantly exploring new techniques and approaches to expand my creative toolkit while staying grounded in fundamental design principles.
            </p>
            
            <p className="text-xl leading-relaxed text-portfolio-deep-navy">
              When I'm not designing, you can find me exploring art galleries, experimenting with new recipes, or hiking in search of inspiration from the natural world.
            </p>
          </main>
        </div>
      </div>
    </GradientBackground>
  );
};

export default About;
