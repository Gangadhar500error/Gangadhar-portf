import React, { useState } from 'react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 

const ReactNative = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Tab content with React Native topics and explanations
  const tabContents = [
    { id: 1, title: "Introduction to React Native", content: "React Native is a framework for building mobile apps using JavaScript and React. It enables cross-platform development for iOS and Android." },
    { id: 2, title: "Installing React Native", content: "React Native can be set up using Expo CLI or React Native CLI. Follow the official documentation for the installation process." },
    { id: 3, title: "Core Components", content: "React Native includes core components like `View`, `Text`, `Image`, and `ScrollView` for building UIs." },
    { id: 4, title: "Style and Layout", content: "React Native uses a styling system similar to CSS but written in JavaScript. It supports Flexbox for layout." },
    { id: 5, title: "Handling User Input", content: "Components like `TextInput`, `Button`, and `Touchable` are used to handle user interactions in React Native." },
    { id: 6, title: "React Navigation", content: "React Navigation is a library for adding navigation between screens in a React Native app." },
    { id: 7, title: "State Management", content: "State can be managed using React's `useState` and `useReducer` hooks, or external libraries like Redux." },
    { id: 8, title: "Working with APIs", content: "React Native allows you to fetch data from APIs using libraries like Axios or the Fetch API." },
    { id: 9, title: "Native Modules", content: "React Native allows integration with native code using Native Modules for advanced functionalities." },
    { id: 10, title: "Debugging", content: "React Native provides tools like React Developer Tools, console logs, and error overlays for debugging." },
    { id: 11, title: "Performance Optimization", content: "Optimizations like lazy loading, FlatList, and memoization can enhance performance in React Native apps." },
    { id: 12, title: "React Native Animations", content: "Libraries like `react-native-reanimated` and `Animated` API are used for animations in React Native." },
    { id: 13, title: "React Native Gestures", content: "Handle gestures using the `react-native-gesture-handler` library for a smooth user experience." },
    { id: 14, title: "Push Notifications", content: "Libraries like `react-native-firebase` or `OneSignal` can be used to implement push notifications." },
    { id: 15, title: "Publishing an App", content: "React Native apps can be published to the App Store and Google Play Store after building and testing." },
  ];

  return (
    <div>

      <main className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
        {/* Left Tab Panel */}
        <div className="w-full lg:w-1/4 bg-gray-100 p-4 h-screen overflow-y-auto dark:bg-gray-800">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 dark:text-gray-400">React Native Topics</h2>
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Learn React Native</h1>
          <p className="text-xl text-gray-700 mb-4">
            Welcome to our React Native tutorial. Select a topic from the left to explore more about building mobile apps with React Native!
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

export default ReactNative;
