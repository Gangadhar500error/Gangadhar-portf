import React, { useState } from 'react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 

const ReactJS = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Tab content with React topics and explanations
  const tabContents = [
    { id: 1, title: "Introduction to React", content: "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components." },
    { id: 2, title: "React Components", content: "Components are the building blocks of a React application. They can be functional or class-based." },
    { id: 3, title: "JSX", content: "JSX is a syntax extension for JavaScript, allowing you to write HTML-like code within React." },
    { id: 4, title: "Props in React", content: "Props are inputs to components. They are used to pass data from parent to child components." },
    { id: 5, title: "State in React", content: "State is a special object in React used to store data or information about the component." },
    { id: 6, title: "React Lifecycle Methods", content: "Lifecycle methods like `componentDidMount`, `shouldComponentUpdate` help control the component's behavior at different stages." },
    { id: 7, title: "Hooks in React", content: "Hooks like `useState` and `useEffect` allow functional components to manage state and side effects." },
    { id: 8, title: "React Events", content: "React handles events similarly to DOM events. Events are written in camelCase, e.g., `onClick`." },
    { id: 9, title: "Conditional Rendering", content: "Conditional rendering in React lets you decide what to render based on certain conditions using operators like `if`, `&&`, or ternary operators." },
    { id: 10, title: "React Router", content: "React Router is a library for handling navigation and routing in React applications." },
    { id: 11, title: "React Context", content: "The Context API allows you to manage state globally and share data across multiple components without prop drilling." },
    { id: 12, title: "React Redux", content: "Redux is a state management library often used with React to manage global state across an application." },
    { id: 13, title: "React Forms", content: "Forms in React use controlled or uncontrolled components to handle user inputs and state updates." },
    { id: 14, title: "React Performance Optimization", content: "Techniques like memoization, lazy loading, and code splitting can improve performance in React apps." },
    { id: 15, title: "React Testing", content: "React testing libraries like Jest and Enzyme are used for unit testing components and applications." },
  ];

  return (
    <div>

      <main className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
        {/* Left Tab Panel */}
        <div className="w-full lg:w-1/4 bg-gray-100 p-4 h-screen overflow-y-auto dark:bg-gray-800">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 dark:text-gray-400">React Topics</h2>
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Learn React</h1>
          <p className="text-xl text-gray-700 mb-4">
            Welcome to our React tutorial. Select a topic from the left to explore more about React and its ecosystem!
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

export default ReactJS;
