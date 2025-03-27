// src/components/Portfolio.js
import React from 'react';

function Portfolio() {
  return (
    <div className="bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 px-6 py-12 w-full rounded font-[sans-serif]">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-gray-800 sm:text-5xl text-3xl font-extrabold">Enhance Your Learning with Our Courses</h1>
        <div className="my-10">
          <p className="text-gray-800 text-sm">
            Unlock your potential with a wide range of online courses tailored to your needs. From beginner to expert levels,
            our learning materials and interactive resources will help you grow in areas like programming, design, business, and more.
          </p>
        </div>

        <hr className="border-gray-600" />

        <div className="mt-10 flex max-sm:flex-col justify-center sm:gap-6 gap-4">
          <button type="button" className="bg-orange-500 hover:bg-orange-600 transition-all text-white font-bold text-sm rounded px-5 py-3">
            Start Learning Today
          </button>
          <button type="button" className="px-6 py-3 rounded text-sm tracking-wider font-semibold border border-orange-600 outline-none bg-transparent hover:bg-orange-600 hover:text-white transition-all duration-300">
            Browse Courses
          </button>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
