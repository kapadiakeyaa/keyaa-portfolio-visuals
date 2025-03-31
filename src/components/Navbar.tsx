
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (isHomePage) return null; // Don't show navbar on homepage

  return (
    <nav className="absolute top-0 left-0 w-full z-10 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-white font-semibold text-xl tracking-tight hover:text-portfolio-lavender-gray transition-colors"
        >
          KK
        </Link>
        <div className="space-x-6">
          <Link 
            to="/" 
            className="text-white hover:text-portfolio-lavender-gray transition-colors"
          >
            Work
          </Link>
          <Link 
            to="/about" 
            className="text-white hover:text-portfolio-lavender-gray transition-colors"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
