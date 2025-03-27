import React, { useState } from 'react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 

const Javascript = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Tab content with JavaScript examples and explanations
  const tabContents = [
    { id: 1, title: "JS Home", content: "JavaScript is a programming language used to make web pages interactive." },
    { id: 2, title: "JS Syntax", content: "JavaScript syntax is the set of rules for how programs are constructed." },
    { id: 3, title: "JS Variables", content: "Variables in JavaScript are used to store data values using var, let, or const." },
    { id: 4, title: "JS Functions", content: "Functions in JavaScript are blocks of code designed to perform a particular task." },
    { id: 5, title: "JS Events", content: "JavaScript events are actions that can be detected and handled, like clicks or key presses." },
    { id: 6, title: "JS Objects", content: "JavaScript objects are collections of properties, defined as key-value pairs." },
    { id: 7, title: "JS Arrays", content: "Arrays in JavaScript are used to store multiple values in a single variable." },
    { id: 8, title: "JS DOM", content: "The Document Object Model (DOM) allows JavaScript to manipulate HTML and CSS on the page." },
    { id: 9, title: "JS Loops", content: "JavaScript loops are used to perform repeated actions, such as for, while, and do-while loops." },
    { id: 10, title: "JS Conditions", content: "Conditional statements in JavaScript are used to perform different actions based on conditions." },
    { id: 11, title: "JS Promises", content: "Promises in JavaScript are used to handle asynchronous operations more effectively." },
    { id: 12, title: "JS Fetch API", content: "The Fetch API is used to make HTTP requests and handle responses." },
    { id: 13, title: "JS Classes", content: "JavaScript classes are syntactic sugar for creating objects and managing inheritance." },
    { id: 14, title: "JS Modules", content: "Modules in JavaScript allow you to organize code into separate files and import/export functionality." },
    { id: 15, title: "JS ES6 Features", content: "JavaScript ES6 introduced new features like arrow functions, template literals, and destructuring." },
  ];

  return (
    <div>

      <main className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
        {/* Left Tab Panel */}
        <div className="w-full lg:w-1/4 bg-gray-100 p-4 h-screen overflow-y-auto dark:bg-gray-800">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 dark:text-gray-400">JavaScript Topics</h2>
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Learn JavaScript</h1>
          <p className="text-xl text-gray-700 mb-4">
            Welcome to our JavaScript tutorial. Select a topic from the left to learn more!
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

export default Javascript;
