import React, { useState } from 'react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 

const Php = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Tab content with PHP examples and explanations
  const tabContents = [
    { id: 1, title: "Introduction to PHP", content: "PHP is a server-side scripting language designed for web development." },
    { id: 2, title: "PHP Syntax", content: "PHP scripts are executed on the server and embedded in HTML using <?php and ?> tags." },
    { id: 3, title: "PHP Variables", content: "PHP variables are declared using the $ symbol, followed by the variable name." },
    { id: 4, title: "PHP Data Types", content: "PHP supports data types like strings, integers, floats, booleans, arrays, and objects." },
    { id: 5, title: "PHP Loops", content: "PHP provides loops like for, while, do-while, and foreach for iterative operations." },
    { id: 6, title: "PHP Conditional Statements", content: "PHP supports if, else, elseif, and switch for conditional logic." },
    { id: 7, title: "PHP Arrays", content: "PHP arrays are used to store multiple values in a single variable." },
    { id: 8, title: "PHP Functions", content: "Functions in PHP are reusable blocks of code that perform specific tasks." },
    { id: 9, title: "PHP Forms", content: "PHP handles form submissions and processes form data using $_GET and $_POST superglobals." },
    { id: 10, title: "PHP Sessions", content: "PHP sessions allow you to store and access user data across multiple pages." },
    { id: 11, title: "PHP Cookies", content: "Cookies in PHP are used to store small amounts of data on the client side." },
    { id: 12, title: "PHP File Handling", content: "PHP allows you to read, write, and manipulate files using built-in functions like fopen and fwrite." },
    { id: 13, title: "PHP OOP", content: "PHP supports Object-Oriented Programming (OOP) with classes, objects, inheritance, and more." },
    { id: 14, title: "PHP MySQL", content: "PHP can interact with MySQL databases to store, retrieve, and manage data." },
    { id: 15, title: "PHP Error Handling", content: "PHP provides error handling using try-catch blocks and custom error handlers." },
  ];

  return (
    <div>

      <main className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
        {/* Left Tab Panel */}
        <div className="w-full lg:w-1/4 bg-gray-100 p-4 h-screen overflow-y-auto dark:bg-gray-800">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 dark:text-gray-400">PHP Topics</h2>
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Learn PHP</h1>
          <p className="text-xl text-gray-700 mb-4">
            Welcome to our PHP tutorial. Select a topic from the left to explore it further!
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

export default Php;
