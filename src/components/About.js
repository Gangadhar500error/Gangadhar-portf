// src/components/About.js
import React from 'react';

function About() {
  return (
    <div className="font-[sans-serif] bg-gray-800 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white">Technology in a Minute</h2>
        <p className="mt-6 text-sm leading-relaxed text-gray-300">
          Our platform offers interactive courses designed to help you master HTML, JavaScript, React, and Tailwind CSS, providing a comprehensive learning journey from beginner to expert.
        </p>
      </div>

      <div className="xl:max-w-7xl max-w-5xl mx-auto mt-12">
        <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-300 rounded flex flex-col justify-between h-full dark:bg-gray-700">
            <div>
              <h3 className="text-gray-800 text-xl font-bold mb-4 dark:text-gray-300">HTML & CSS</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Learn the foundation of web development with HTML and CSS. Build responsive, user-friendly websites with essential styling techniques.</p>
            </div>
            <button className="text-sm text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 tracking-wide mt-6 rounded self-start">Start Learning</button>
          </div>
          <div className="p-6 bg-gray-300 rounded flex flex-col justify-between h-full dark:bg-gray-700">
            <div>
              <h3 className="text-gray-800 text-xl font-bold mb-4 dark:text-gray-300">JavaScript Basics</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Master JavaScript, the most popular programming language for building dynamic web applications. Start with the basics and progress to advanced concepts.</p>
            </div>
            <button className="text-sm text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 tracking-wide mt-6 rounded self-start">Start Learning</button>
          </div>
          <div className="p-6 bg-gray-300 rounded flex flex-col justify-between h-full dark:bg-gray-700">
            <div>
              <h3 className="text-gray-800 text-xl font-bold mb-4 dark:text-gray-300">React Development</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Build modern, efficient web apps with React. Learn component-based architecture and state management to create powerful user interfaces.</p>
            </div>
            <button className="text-sm text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 tracking-wide mt-6 rounded self-start">Start Learning</button>
          </div>
          <div className="p-6 bg-gray-300 rounded flex flex-col justify-between h-full dark:bg-gray-700">
            <div>
              <h3 className="text-gray-800 text-xl font-bold mb-4 dark:text-gray-300">Tailwind CSS</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Enhance your web designs with Tailwind CSS, a utility-first CSS framework that makes styling easy and customizable for any project.</p>
            </div>
            <button className="text-sm text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 tracking-wide mt-6 rounded self-start">Start Learning</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
