import React, { useState } from 'react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 

const Mysql = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Tab content with MySQL topics and explanations
  const tabContents = [
    { id: 1, title: "Introduction to MySQL", content: "MySQL is a relational database management system (RDBMS) that uses SQL (Structured Query Language) for managing databases." },
    { id: 2, title: "Database Basics", content: "Databases are collections of data organized for easy access, management, and updating." },
    { id: 3, title: "Installing MySQL", content: "MySQL can be installed using package managers like apt (Linux) or downloaded from the official website." },
    { id: 4, title: "Connecting to MySQL", content: "Use MySQL CLI or GUI tools like phpMyAdmin and MySQL Workbench to connect to your database." },
    { id: 5, title: "Creating a Database", content: "Databases in MySQL are created using the `CREATE DATABASE database_name;` command." },
    { id: 6, title: "MySQL Data Types", content: "MySQL supports various data types, including INT, VARCHAR, TEXT, DATE, and BLOB." },
    { id: 7, title: "Creating Tables", content: "Tables in MySQL are created with the `CREATE TABLE` command, specifying columns and their data types." },
    { id: 8, title: "Inserting Data", content: "Data is inserted into MySQL tables using the `INSERT INTO table_name VALUES (...);` command." },
    { id: 9, title: "Querying Data", content: "Retrieve data using SQL queries like `SELECT column_name FROM table_name WHERE condition;`." },
    { id: 10, title: "Updating Data", content: "Update existing data using the `UPDATE table_name SET column_name = value WHERE condition;` command." },
    { id: 11, title: "Deleting Data", content: "Remove data using the `DELETE FROM table_name WHERE condition;` command." },
    { id: 12, title: "Joins", content: "MySQL supports joins to combine rows from two or more tables based on related columns." },
    { id: 13, title: "Indexes", content: "Indexes improve query performance by allowing faster lookups for specific data." },
    { id: 14, title: "MySQL Functions", content: "MySQL provides functions like COUNT, AVG, SUM, and CONCAT for data processing." },
    { id: 15, title: "Exporting Data", content: "Data can be exported using commands like `mysqldump` or through GUI tools." },
  ];

  return (
    <div>

      <main className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
        {/* Left Tab Panel */}
        <div className="w-full lg:w-1/4 bg-gray-100 p-4 h-screen overflow-y-auto dark:bg-gray-800">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 dark:text-gray-400">MySQL Topics</h2>
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Learn MySQL</h1>
          <p className="text-xl text-gray-700 mb-4">
            Welcome to our MySQL tutorial. Select a topic from the left to dive deeper!
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

export default Mysql;
