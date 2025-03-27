import React, { useState } from 'react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 

const Angular = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Tab content with Angular topics and explanations
  const tabContents = [
    { id: 1, title: "Introduction to Angular", content: "Angular is a TypeScript-based framework for building web applications. It is developed and maintained by Google." },
    { id: 2, title: "Setting Up Angular", content: "Angular applications are created using the Angular CLI. Install it with npm and create a new app using `ng new`." },
    { id: 3, title: "Components", content: "Components are the building blocks of Angular applications, defined by a template, styles, and logic." },
    { id: 4, title: "Modules", content: "Modules are used to organize an Angular application. The `AppModule` is the root module in an Angular app." },
    { id: 5, title: "Data Binding", content: "Angular supports two-way data binding, allowing synchronization between the view and model." },
    { id: 6, title: "Directives", content: "Directives like `ngFor` and `ngIf` are used to manipulate the DOM and add logic to templates." },
    { id: 7, title: "Services and Dependency Injection", content: "Services in Angular are used to share data and logic across components. Dependency injection is used to provide services." },
    { id: 8, title: "Routing", content: "Angular Router is used to build Single Page Applications by navigating between different views." },
    { id: 9, title: "Forms in Angular", content: "Angular supports both template-driven and reactive forms for managing user inputs and validation." },
    { id: 10, title: "Pipes", content: "Pipes in Angular are used to transform data in the template, such as formatting dates or numbers." },
    { id: 11, title: "HTTP Client", content: "Angular provides the `HttpClient` module for making HTTP requests to APIs." },
    { id: 12, title: "Lifecycle Hooks", content: "Angular components have lifecycle hooks like `OnInit` and `OnDestroy` to control their behavior." },
    { id: 13, title: "Testing", content: "Angular supports unit and end-to-end testing using tools like Jasmine and Protractor." },
    { id: 14, title: "Performance Optimization", content: "Optimizations like lazy loading, Ahead-of-Time (AOT) compilation, and Change Detection Strategy improve performance." },
    { id: 15, title: "Angular Material", content: "Angular Material is a UI component library that follows the Material Design guidelines for building beautiful UIs." },
  ];

  return (
    <div>
      <main className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
        {/* Left Tab Panel */}
        <div className="w-full lg:w-1/4 bg-gray-100 p-4 h-screen overflow-y-auto dark:bg-gray-800">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 dark:text-gray-400">Angular Topics</h2>
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Learn Angular</h1>
          <p className="text-xl text-gray-700 mb-4">
            Welcome to our Angular tutorial. Select a topic from the left to explore more about Angular's powerful features and tools!
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

export default Angular;
