import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')"}}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Content */}
        <div className="relative text-center text-white">
          <h1 className="text-4xl font-bold">About Heart Diagnosis System</h1>
          <p className="mt-2 text-lg">Your Partner in Heart Health Management</p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Our Mission</h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-7">
          At the Heart Diagnosis System, our mission is to empower individuals with the knowledge and tools needed to manage their heart health effectively. We provide accurate diagnostic insights, personalized care recommendations, and essential educational resources to improve the quality of life for those at risk of heart disease.
        </p>
      </section>

      {/* Our Story */}
      <section className="bg-gray-50 dark:bg-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1581091351708-f2c1d5c76502?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
              alt="Our Story"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
          {/* Content */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Our Story</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-7">
              Founded in 2024 by Mukisa Vaniah Christian, the Heart Diagnosis System was created out of a deep passion for improving heart health management through technology. Understanding the challenges faced by individuals in identifying heart conditions, I set out to develop a platform that utilizes advanced algorithms to provide accurate diagnoses and actionable insights.
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg leading-7">
              By leveraging cutting-edge AI technology, I aim to empower users with timely and accurate diagnostic information, enabling them to take control of their heart health. My commitment to continuous research and user-centric design drives innovation and ensures that the Heart Diagnosis System remains a trusted solution for heart health management.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Developer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center">Meet the Developer</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center">
          <img
            src="/vcs.png"
            alt="Mukisa Vaniah Christian"
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Mukisa Vaniah Christian</h3>
          <p className="text-gray-600 dark:text-gray-400">Developer & Founder</p>
          <div className="flex space-x-3 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-700">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-pink-500">
              <FaInstagram />
            </a>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 dark:bg-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Compassion</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  We approach every user with empathy and understanding, recognizing the challenges they face in managing their heart health.
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6M9 16h6M9 8h6m-3-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Innovation</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  We leverage the latest technologies to provide cutting-edge solutions for heart health management and education.
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Integrity</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  We maintain the highest standards of honesty and ethics in all our interactions and services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center">Contact Us</h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-7 text-center">
          For inquiries, collaborations, or support, please reach out to me at:
        </p>
        <p className="mt-2 text-gray-700 dark:text-gray-300 text-lg leading-7 text-center">
          Email: <a href="mailto:vierycalliper@gmail.com" className="text-indigo-500 hover:underline">vierycalliper@gmail.com</a>
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
