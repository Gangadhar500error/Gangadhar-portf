import React, { useState } from 'react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 

const NodeJS = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Tab content with Node.js topics and explanations
  const tabContents = [
    { id: 1, title: "Introduction to Node.js", content: "Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows developers to build server-side and networking applications." },
    { id: 2, title: "Installing Node.js", content: "Node.js can be installed from the official website. The installation includes npm, the Node.js package manager." },
    { id: 3, title: "Modules in Node.js", content: "Node.js modules are reusable blocks of code. Examples include `fs`, `http`, and `os`. You can also create custom modules." },
    { id: 4, title: "Working with the File System", content: "The `fs` module allows you to read, write, delete, and manage files in a Node.js application." },
    { id: 5, title: "Building a Web Server", content: "Node.js can create a web server using the `http` module, enabling developers to handle HTTP requests and responses." },
    { id: 6, title: "Node.js and npm", content: "npm is Node.js's package manager. It is used to install, update, and manage external libraries for your applications." },
    { id: 7, title: "Asynchronous Programming", content: "Node.js uses an event-driven, non-blocking I/O model to handle asynchronous programming efficiently." },
    { id: 8, title: "Event Loop", content: "The event loop in Node.js is a mechanism that allows it to perform non-blocking operations by offloading tasks to the operating system." },
    { id: 9, title: "Streams", content: "Streams in Node.js are used to handle reading or writing data in chunks, such as file streams or HTTP streams." },
    { id: 10, title: "Buffers", content: "Buffers are used in Node.js to handle binary data. They are particularly useful when working with streams." },
    { id: 11, title: "Express.js", content: "Express is a web application framework for Node.js that simplifies building APIs and web applications." },
    { id: 12, title: "Database Integration", content: "Node.js can connect to databases like MongoDB, MySQL, and PostgreSQL to manage data for applications." },
    { id: 13, title: "Middlewares", content: "Middlewares in Node.js are functions that execute during the request-response cycle and provide additional functionality." },
    { id: 14, title: "Handling Errors", content: "Error handling in Node.js is performed using try-catch blocks and error-first callbacks." },
    { id: 15, title: "Deployment", content: "Node.js applications can be deployed on platforms like Heroku, AWS, or DigitalOcean using various tools and practices." },
  ];

  return (
    <div>

      <main className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
        {/* Left Tab Panel */}
        <div className="w-full lg:w-1/4 bg-gray-100 p-4 h-screen overflow-y-auto dark:bg-gray-800">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 dark:text-gray-400">Node.js Topics</h2>
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Learn Node.js</h1>
          <p className="text-xl text-gray-700 mb-4">
            Welcome to our Node.js tutorial. Select a topic from the left to dive into server-side JavaScript development with Node.js!
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

export default NodeJS;
