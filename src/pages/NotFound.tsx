
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-white">404</h1>
        <p className="text-xl text-portfolio-lavender-gray mb-8">
          The page at {location.pathname} cannot be found.
        </p>
        <button 
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-portfolio-dark-blue text-white rounded-md hover:bg-portfolio-deep-navy transition-colors"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
