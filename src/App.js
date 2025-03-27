// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import the Navbar component
import MainPage from './pages/MainPage';
import Html from './pages/Html';
import CssPage from './pages/Css'; // Changed name to avoid duplication
import Javascript from './pages/Javascript';
import Php from './pages/Php';
import Laravel from './pages/Laravel';
import Mysql from './pages/Mysql';
import Database from './pages/Database';
import Tailwind from './pages/Tailwind';
import ReactPage from './pages/React'; // Changed name to avoid duplication
import ReactNative from './pages/Reactnative';
import Angular from './pages/Angular';
import Node from './pages/Node';
import Vue from './pages/Vue';
import Login from './pages/Login';
import Certifications from './pages/Certifications';

function App() {
  // Load initial dark mode state from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // Apply or remove the 'dark' class on the root element based on darkMode state
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode)); // Persist preference
  }, [darkMode]);

  return (
    <Router>
      {/* Navbar is rendered only here, once */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/html" element={<Html />} />
          <Route path="/css" element={<CssPage />} />
          <Route path="/javascript" element={<Javascript />} />
          <Route path="/php" element={<Php />} />
          <Route path="/laravel" element={<Laravel />} />
          <Route path="/mysql" element={<Mysql />} />
          <Route path="/database" element={<Database />} />
          <Route path="/tailwind" element={<Tailwind />} />
          <Route path="/react" element={<ReactPage />} />
          <Route path="/reactnative" element={<ReactNative />} />
          <Route path="/angular" element={<Angular />} />
          <Route path="/node" element={<Node />} />
          <Route path="/vue" element={<Vue />} />
          <Route path="/login" element={<Login />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
