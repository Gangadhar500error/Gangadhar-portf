import React, { useState } from 'react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 

const VueJS = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Tab content with Vue.js topics and explanations
  const tabContents = [
    { id: 1, title: "Introduction to Vue.js", content: "Vue.js is a progressive JavaScript framework used for building user interfaces. It is designed to be incrementally adoptable." },
    { id: 2, title: "Setting Up Vue.js", content: "Vue.js can be installed via CDN, npm, or Yarn. You can start with the Vue CLI to set up a full project structure." },
    { id: 3, title: "Vue.js Components", content: "Vue.js applications are built with components. A component consists of template, script, and style sections." },
    { id: 4, title: "Directives in Vue.js", content: "Directives in Vue.js are special tokens in the markup that provide additional functionality, such as `v-if`, `v-for`, and `v-bind`." },
    { id: 5, title: "Vue.js Data Binding", content: "Vue.js offers two-way data binding with the `v-model` directive, making it easy to keep your data and the view in sync." },
    { id: 6, title: "Vue.js Methods", content: "In Vue.js, methods are functions defined within a component's `methods` property. They are used to handle events or perform logic." },
    { id: 7, title: "Vue.js Lifecycle Hooks", content: "Vue components have lifecycle hooks like `created()`, `mounted()`, and `destroyed()`, which can be used to add behavior at specific stages." },
    { id: 8, title: "Vue.js Routing", content: "Vue Router is used to manage routing in single-page applications (SPA). It allows navigation between different views." },
    { id: 9, title: "Vuex for State Management", content: "Vuex is a state management library for Vue.js applications. It helps manage shared state across components." },
    { id: 10, title: "Vue.js Forms", content: "Vue.js provides powerful tools for working with forms, including `v-model` for binding form data and custom validation." },
    { id: 11, title: "Computed Properties", content: "Computed properties in Vue.js are used for reactive data transformations and caching values based on dependencies." },
    { id: 12, title: "Vue.js Filters", content: "Filters in Vue.js are used to format data for display. They can be applied to text, numbers, and other types of data." },
    { id: 13, title: "Vue CLI", content: "Vue CLI is a command-line tool that helps in creating and managing Vue.js projects with features like hot-reloading, testing, and build tools." },
    { id: 14, title: "Vue.js Transitions", content: "Vue.js provides built-in directives to add transitions and animations to elements when they are inserted, updated, or removed from the DOM." },
    { id: 15, title: "Vue.js Filters", content: "Filters are functions used for formatting data for display in templates. They are applied with the `|` pipe operator." },
  ];

  return (
    <div>
      <main className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
        {/* Left Tab Panel */}
        <div className="w-full lg:w-1/4 bg-gray-100 p-4 h-screen overflow-y-auto dark:bg-gray-800">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 dark:text-gray-400">Vue.js Topics</h2>
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Learn Vue.js</h1>
          <p className="text-xl text-gray-700 mb-4">
            Welcome to our Vue.js tutorial. Select a topic from the left to explore Vue.js and start building interactive web applications!
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

export default VueJS;
