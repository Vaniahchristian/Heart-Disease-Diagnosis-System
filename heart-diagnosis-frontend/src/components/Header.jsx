// src/components/Header.jsx
import React, { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext'; 

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* Logo / Branding */}
        <div className="text-2xl font-bold text-blue-500">
          Heart Disease Diagnosis
        </div>
        
        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/prediction" className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
            Diagnosis
          </Link>
          <Link to="/education-content" className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
            Education
          </Link>
          <Link to="/treatment-advice" className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
            Treatment
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
            About Us
          </Link>
        </nav>
        
        {/* User Actions */}
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                Logout
              </button>
              <FaUserCircle className="text-gray-600 w-7 h-7 hidden md:block" />
            </>
          ) : (
            <Link to="/login">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Login
              </button>
            </Link>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
            {/* Mobile Menu Icon */}
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu - you can use state to toggle this */}
      {/* Example:
        {isMobileMenuOpen && (
          <nav className="mobile-nav">
            <Link to="/prediction">Diagnosis</Link>
            <Link to="/education-content">Education</Link>
            ...
          </nav>
        )}
      */}
    </header>
  );
};

export default Header;
