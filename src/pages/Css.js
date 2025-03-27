import React, { useState } from 'react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 

const Css = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Tab content with CSS examples and explanations
  const tabContents = [
    { id: 1, title: 'CSS Introduction', content: <p>CSS (Cascading Style Sheets) is used to style and layout HTML elements...</p> },
    { id: 2, title: 'CSS Selectors', content: <p>CSS selectors are patterns used to select the elements you want to style...</p> },
    { id: 3, title: 'CSS Flexbox', content: <p>Flexbox is a layout model that provides an easier and more efficient way...</p> },
    { id: 4, title: 'CSS Grid', content: <p>CSS Grid is a two-dimensional layout system for the web...</p> },
    { id: 5, title: 'CSS Box Model', content: <p>The box model is a fundamental concept in CSS...</p> },
    { id: 6, title: 'CSS Colors', content: <p>CSS provides several ways to set colors for elements...</p> },
    { id: 7, title: 'CSS Borders', content: <p>You can create borders in CSS using the border property...</p> },
    { id: 8, title: 'CSS Padding and Margin', content: <p>Padding and margin are used to create space around elements...</p> },
    { id: 9, title: 'CSS Positioning', content: <p>CSS positioning allows you to control the positioning of elements...</p> },
    { id: 10, title: 'CSS Float', content: <p>The float property in CSS is used to place elements on the left or right...</p> },
    { id: 11, title: 'CSS Clear', content: <p>The clear property in CSS is used to control the behavior of elements...</p> },
    { id: 12, title: 'CSS Display', content: <p>The display property is one of the most important properties in CSS...</p> },
    { id: 13, title: 'CSS Visibility', content: <p>The visibility property is used to hide or show elements...</p> },
    { id: 14, title: 'CSS Text Alignment', content: <p>CSS provides several ways to align text...</p> },
    { id: 15, title: 'CSS Font Style', content: <p>In CSS, you can change the font style of elements...</p> },
    { id: 16, title: 'CSS Line Height', content: <p>The line-height property controls the amount of space between lines of text...</p> },
    { id: 17, title: 'CSS Text Shadow', content: <p>Text shadow allows you to add shadows to text...</p> },
    { id: 18, title: 'CSS Transform', content: <p>Transform property in CSS allows you to change the shape of an element...</p> },
    { id: 19, title: 'CSS Transition', content: <p>CSS transitions allow you to change property values smoothly...</p> },
    { id: 20, title: 'CSS Animation', content: <p>CSS animations allow you to create animations without using JavaScript...</p> },
    { id: 21, title: 'CSS Backgrounds', content: <p>The background property in CSS allows you to set background images...</p> },
    { id: 22, title: 'CSS Opacity', content: <p>The opacity property allows you to make elements transparent...</p> },
    { id: 23, title: 'CSS z-Index', content: <p>The z-index property controls the stacking order of elements...</p> },
    { id: 24, title: 'CSS Media Queries', content: <p>Media queries allow you to apply different styles for different screen sizes...</p> },
    { id: 25, title: 'CSS Variables', content: <p>CSS variables allow you to store values and reuse them...</p> },
    { id: 26, title: 'CSS Calc Function', content: <p>The calc() function allows you to perform calculations in CSS...</p> },
    { id: 27, title: 'CSS Flexbox vs Grid', content: <p>Flexbox and Grid are both powerful layout systems...</p> },
    { id: 28, title: 'CSS Shadow', content: <p>CSS box-shadow property allows you to add shadow effects to elements...</p> },
    { id: 29, title: 'CSS Transforms 3D', content: <p>CSS transforms can also be used for 3D transformations...</p> },
    { id: 30, title: 'CSS Font Awesome', content: <p>Learn how to use Font Awesome icons in your CSS...</p> },
  ];

  return (
    <div>
     

      <main className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
        {/* Left Tab Panel */}
        <div className="w-full lg:w-1/4 bg-gray-100 p-4 h-screen overflow-y-auto dark:bg-gray-800">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 dark:text-gray-400">CSS Topics</h2>
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Learn CSS</h1>
          <p className="text-xl text-gray-700 mb-4">
            Welcome to our CSS tutorial. Select a topic from the left to learn more!
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

      {/* Include Footer */}
      <Footer />
    </div>
  );
};

export default Css;
