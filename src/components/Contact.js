// src/components/Contact.js
import React from 'react';

function Contact() {
  return (
    <div className="font-[sans-serif] bg-gray-100 py-20 px-6 dark:bg-gray-800 dark:border-b">
      <div className="grid lg:grid-cols-2 gap-6 h-full max-w-7xl mx-auto">
        
        {/* Annual Membership Card */}
        <div className="bg-gray-700 rounded-lg p-8 shadow-md text-center text-gray-100">
          <h3 className="text-3xl font-extrabold dark:text-gray-300">Annual Membership</h3>
          <p className="text-sm mt-4 leading-relaxed dark:text-gray-300">
            Join our annual membership program to access exclusive resources, expert advice, and more. Perfect for continuous learning and staying up-to-date with the latest trends.
          </p>
          <button type="button"
            className="bg-orange-500 hover:bg-orange-600 transition-all text-white font-bold text-sm rounded px-5 py-3 mt-6">
            Subscribe Now
          </button>
        </div>

        {/* Online Certification Card */}
        <div className="bg-gray-700 rounded-lg p-8 shadow-md text-center text-gray-100">
          <h3 className="text-3xl font-extrabold dark:text-gray-300">Online Certification</h3>
          <p className="text-sm mt-4 leading-relaxed dark:text-gray-300">
            Explore our online certification programs designed to boost your skills and open doors to new career opportunities. Flexible, affordable, and recognized globally.
          </p>
          <button type="button"
            className="bg-orange-500 hover:bg-orange-600 transition-all text-white font-bold text-sm rounded px-5 py-3 mt-6">
            Get Certified
          </button>
        </div>

      </div>
    </div>
  );
}

export default Contact;
