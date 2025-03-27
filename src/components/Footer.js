// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 py-12 px-12 font-sans tracking-wide">
      <div className="grid max-md:grid-cols-1 max-xl:grid-cols-3 xl:grid-cols-5 xl:gap-20 max-xl:gap-8 max-w-7xl mx-auto">
        
        {/* Branding & Subscription Section */}
        <div className="max-xl:col-span-full xl:col-span-2">
          <div className="max-xl:max-w-2xl">
            <h2 className="text-3xl mb-6 text-white font-bold">Expand Your Skills with Us</h2>
            <p className="text-gray-300 text-sm">
              Join our community and get access to free tutorials, resources, and tips to excel in your learning journey.
            </p>

            <div className="bg-white flex px-1 py-1 mt-8 rounded-full">
              <input type="email" placeholder="Enter your email" className="w-full outline-none bg-transparent pl-4 text-sm" />
              <button type="button" className="bg-gray-800 hover:bg-gray-900 transition-all text-white text-sm rounded-full px-5 py-2 tracking-wide">
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Media Links */}
          <ul className="flex items-center mt-12 space-x-4">
            {/* Social media icons (Facebook, Twitter, LinkedIn, Instagram) */}
          </ul>
        </div>

        {/* Explore Courses Section */}
        <div>
          <h4 className="text-lg mb-6 text-white">Explore Courses</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-300 hover:text-white text-sm">Web Development</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm">Data Science</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm">Machine Learning</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm">Cybersecurity</a></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h4 className="text-lg mb-6 text-white">Resources</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-300 hover:text-white text-sm">Articles</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm">Video Tutorials</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm">E-books</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm">Community Forum</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h4 className="text-lg mb-6 text-white">Support</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-300 hover:text-white text-sm">Help Center</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm">FAQ</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm">Contact Us</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm">Technical Support</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <p className="text-sm text-gray-300 mt-8 max-w-7xl mx-auto">© 2024 e-Learning Platform. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
