// src/components/Hero.js
import React from 'react';

function Hero() {
  return (
    <div className="font-sans bg-yellow-300 px-6 py-12 overflow-hidden h-[70vh]">
      <div className="max-w-7xl max-md:max-w-md mx-auto h-full flex items-center justify-center">
        <div className="grid md:grid-cols-2 items-center gap-12 h-full">
          <div className="text-left">
            <h2 className="text-gray-800 lg:text-5xl md:text-4xl text-3xl font-extrabold mb-4 lg:!leading-[55px]">Learn Web Development with Tailwind CSS</h2>
            <p className="text-gray-800 mt-4 text-base leading-relaxed">Start your journey into web development with a comprehensive course designed for all levels. Learn HTML, CSS, JavaScript, and more with real-world projects and exercises.</p>
            <div className="mt-8">
              <button type='button' className="bg-orange-500 hover:bg-orange-600 transition-all text-white font-bold text-sm rounded px-5 py-3">Start Learning Now</button>
              <a href="javascript:void(0)" className="text-gray-800 text-sm font-bold underline sm:ml-6 max-sm:mt-4 max-sm:block whitespace-nowrap">See Course Details</a>
            </div>
          </div>

          <div className="flex justify-center">
            <img src='https://hyperlocalcloud.com/images/new-images/e-learning-marketplace-platform.webp' className="shrink-0 w-full h-full  rounded-md object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
