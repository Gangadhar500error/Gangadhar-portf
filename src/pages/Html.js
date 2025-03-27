import React, { useState } from 'react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 

const Html = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Tab content with CSS examples and explanations
  const tabContents = [
    { id: 1, title: "HTML Home", content: "HTML elements are the building blocks of HTML pages. An element usually has an opening tag, content, and a closing tag." },
    { id: 2, title: "HTML Syntax", content: "HTML syntax includes the rules for writing HTML tags and structuring HTML documents." },
    { id: 3, title: "HTML Elements", content: "An HTML element is a part of the HTML document that is enclosed by start and end tags." },
    { id: 4, title: "HTML Attributes", content: "HTML attributes provide additional information about an element." },
    { id: 5, title: "HTML Headings", content: "HTML headings are used to define the headings in the document. They are defined with the <h1> to <h6> tags." },
    { id: 6, title: "HTML Paragraphs", content: "HTML paragraphs are defined using the <p> tag. Paragraphs are used to structure text." },
    { id: 7, title: "HTML Links", content: "HTML links are defined with the <a> tag and are used to navigate between pages or locations." },
    { id: 8, title: "HTML Images", content: "Images are inserted in HTML using the <img> tag." },
    { id: 9, title: "HTML Lists", content: "HTML supports both ordered and unordered lists using <ol> and <ul> tags." },
    { id: 10, title: "HTML Tables", content: "HTML tables are created using the <table> tag and are used to represent data in a structured way." },
    { id: 11, title: "HTML Forms", content: "HTML forms are used to collect user inputs. They contain elements like input fields, checkboxes, and submit buttons." },
    { id: 12, title: "HTML Input Types", content: "HTML defines different input types for creating forms such as text, password, email, and more." },
    { id: 13, title: "HTML Buttons", content: "Buttons in HTML are created using the <button> tag and are used to trigger actions." },
    { id: 14, title: "HTML Divisions", content: "The <div> tag is used to group elements together and style them with CSS." },
    { id: 15, title: "HTML Text Formatting", content: "HTML provides several tags to format text like <strong>, <em>, <b>, <i>, etc." },
    { id: 16, title: "HTML Colors", content: "Colors in HTML can be applied to text and backgrounds using CSS, with the <style> tag." },
    { id: 17, title: "HTML Backgrounds", content: "HTML backgrounds are added using the background attribute in the <body> tag or with CSS." },
    { id: 18, title: "HTML Fonts", content: "Fonts are customized in HTML using the <style> tag and CSS." },
    { id: 19, title: "HTML Icons", content: "HTML icons are usually added using external libraries like Font Awesome or custom SVG images." },
    { id: 20, title: "HTML Video", content: "HTML5 provides a <video> tag to embed videos into your webpage." },
    { id: 21, title: "HTML Audio", content: "HTML5 provides an <audio> tag to embed audio content into your webpage." },
    { id: 22, title: "HTML Audio Controls", content: "The <audio> tag can include controls like play, pause, and volume for interactive playback." },
    { id: 23, title: "HTML Forms Attributes", content: "HTML forms have attributes like action, method, and enctype to define form behavior." },
    { id: 24, title: "HTML HTML5", content: "HTML5 is the latest version of HTML, which includes new features like semantic elements, multimedia support, etc." },
    { id: 25, title: "HTML Canvas", content: "The <canvas> tag is used to draw graphics and animations in HTML." },
    { id: 26, title: "HTML SVG", content: "HTML supports SVG (Scalable Vector Graphics) for creating vector-based images." },
    { id: 27, title: "HTML Media", content: "HTML media elements include audio, video, and images that are used to display content." },
    { id: 28, title: "HTML Entities", content: "HTML entities are used to display special characters like ©, €, <, >, etc." },
    { id: 29, title: "HTML Comments", content: "HTML comments are added using <!-- comment --> and are not displayed on the page." },
    { id: 30, title: "HTML File Paths", content: "HTML file paths are used to link to other files (images, stylesheets, scripts) in your project." },
  ];

  return (
    <div>
     

      <main className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
        {/* Left Tab Panel */}
        <div className="w-full lg:w-1/4 bg-gray-100 p-4 h-screen overflow-y-auto dark:bg-gray-800">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 dark:text-gray-400">Html Topics</h2>
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

export default Html;
