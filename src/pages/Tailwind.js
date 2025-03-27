import React, { useState } from 'react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 

const Tailwind = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Tab content with Tailwind topics and explanations
  const tabContents = [
    { id: 1, title: "Introduction to Tailwind CSS", content: "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs directly in your markup." },
    { id: 2, title: "Installing Tailwind", content: "Tailwind can be installed via npm or yarn. Add it to your project by running `npm install tailwindcss`." },
    { id: 3, title: "Configuring Tailwind", content: "Tailwind's configuration file allows you to customize your theme, colors, and more by running `npx tailwindcss init`." },
    { id: 4, title: "Using Utility Classes", content: "Tailwind provides utility classes like `bg-blue-500`, `text-center`, and `mt-4` for styling directly in your HTML or JSX." },
    { id: 5, title: "Responsive Design", content: "Tailwind supports responsive design with utilities like `sm:`, `md:`, `lg:`, and `xl:` prefixes." },
    { id: 6, title: "Customizing Colors", content: "You can add custom colors to your Tailwind config file under the `extend` section in the `theme` object." },
    { id: 7, title: "Typography Utilities", content: "Tailwind includes typography utilities for text alignment, font size, line height, and more." },
    { id: 8, title: "Flexbox and Grid", content: "Tailwind provides utilities for layout systems like Flexbox (`flex`, `justify-center`) and Grid (`grid`, `grid-cols-3`)." },
    { id: 9, title: "Spacing Utilities", content: "Use spacing utilities like `m-4`, `p-2`, and `gap-6` for consistent padding, margin, and grid gaps." },
    { id: 10, title: "Hover and Focus States", content: "Tailwind supports state variants like `hover:bg-blue-500` and `focus:ring` for styling interactive elements." },
    { id: 11, title: "Dark Mode", content: "Tailwind makes it easy to implement dark mode using the `dark:` prefix and enabling dark mode in your config." },
    { id: 12, title: "Custom Plugins", content: "You can extend Tailwind's functionality by adding custom plugins for additional utilities or components." },
    { id: 13, title: "Animations", content: "Tailwind provides animation utilities like `animate-bounce` and `animate-spin` for basic animations." },
    { id: 14, title: "Building Components", content: "Tailwind's utility classes are great for building reusable and customizable components." },
    { id: 15, title: "Optimizing for Production", content: "Use tools like PurgeCSS to remove unused styles and reduce the size of your Tailwind CSS file in production." },
  ];

  return (
    <div>
      <main className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
        {/* Left Tab Panel */}
        <div className="w-full lg:w-1/4 bg-gray-100 p-4 h-screen overflow-y-auto dark:bg-gray-800">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 dark:text-gray-400">Tailwind CSS Topics</h2>
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Learn Tailwind CSS</h1>
          <p className="text-xl text-gray-700 mb-4">
            Welcome to our Tailwind CSS tutorial. Select a topic from the left to explore more!
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

export default Tailwind;
