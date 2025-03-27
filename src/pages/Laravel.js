import React, { useState } from 'react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 

const Laravel = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Tab content with Laravel examples and explanations
  const tabContents = [
    { id: 1, title: "Introduction to Laravel", content: "Laravel is a PHP framework for building modern web applications, providing an elegant syntax and tools." },
    { id: 2, title: "Routing in Laravel", content: "Laravel routes define how URIs are mapped to controllers or closures." },
    { id: 3, title: "Controllers", content: "Controllers in Laravel group related route logic and handle requests." },
    { id: 4, title: "Blade Templates", content: "Blade is Laravel's templating engine, allowing for reusable components and simple syntax." },
    { id: 5, title: "Models and Eloquent", content: "Laravel models represent database tables, and Eloquent provides an ORM for easy database interactions." },
    { id: 6, title: "Database Migrations", content: "Migrations in Laravel are version-controlled scripts for managing database schema changes." },
    { id: 7, title: "Middleware", content: "Middleware in Laravel filters HTTP requests entering your application." },
    { id: 8, title: "Authentication", content: "Laravel offers built-in authentication with guards, providers, and user models." },
    { id: 9, title: "Validation", content: "Laravel provides an expressive way to validate data with rules and error messages." },
    { id: 10, title: "File Storage", content: "Laravel supports local, S3, and custom file storage using the Filesystem facade." },
    { id: 11, title: "Laravel Artisan", content: "Artisan is the command-line tool in Laravel for automating tasks like creating models and controllers." },
    { id: 12, title: "API Development", content: "Laravel supports RESTful API development with tools like Sanctum and Passport for authentication." },
    { id: 13, title: "Queues", content: "Laravel queues are used to delay time-consuming tasks like sending emails." },
    { id: 14, title: "Notifications", content: "Laravel notifications provide a way to send alerts through email, SMS, or other channels." },
    { id: 15, title: "Laravel Events", content: "Events in Laravel allow you to handle actions like user registration or order completion." },
  ];

  return (
    <div>

      <main className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
        {/* Left Tab Panel */}
        <div className="w-full lg:w-1/4 bg-gray-100 p-4 h-screen overflow-y-auto dark:bg-gray-800">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 dark:text-gray-400">Laravel Topics</h2>
          <ul className="space-y-2">
            {tabContents.map(tab => (
              <li
                key={tab.id}
                className={`cursor-pointer p-2 rounded-md dark:bg-gray-700 dark:text-gray-300 ${
                  activeTab === tab.id
                    ? 'bg-orange-500 text-gray-100 dark:bg-orange-500 dark:text-gray-100'
                    : 'bg-gray-100 text-gray-800'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content Panel */}
        <div className="flex-1 p-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Learn Laravel</h1>
          <p className="text-xl text-gray-700 mb-4">
            Welcome to our Laravel tutorial. Select a topic from the left to explore it further!
          </p>

          {/* Display the content of the active tab */}
          <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-600 mb-2">
              {tabContents.find(tab => tab.id === activeTab)?.title}
            </h3>
            <div>{tabContents.find(tab => tab.id === activeTab)?.content}</div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Laravel;
