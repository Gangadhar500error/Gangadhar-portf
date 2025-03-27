import React, { useState } from 'react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 

const Database = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Tab content with Database topics and explanations
  const tabContents = [
    { id: 1, title: "Introduction to Databases", content: "A database is an organized collection of data that can be easily accessed, managed, and updated." },
    { id: 2, title: "Types of Databases", content: "Databases can be classified into relational, NoSQL, hierarchical, and distributed databases." },
    { id: 3, title: "Relational Databases", content: "Relational databases use tables to store data and are managed using SQL. Examples include MySQL, PostgreSQL, and Oracle." },
    { id: 4, title: "NoSQL Databases", content: "NoSQL databases are designed for unstructured data and provide flexibility in schema design. Examples include MongoDB and Cassandra." },
    { id: 5, title: "Database Management Systems (DBMS)", content: "DBMS software is used to interact with databases. It helps in defining, creating, and managing databases." },
    { id: 6, title: "SQL Basics", content: "SQL is a standard language for interacting with relational databases. It includes commands like SELECT, INSERT, UPDATE, and DELETE." },
    { id: 7, title: "Database Normalization", content: "Normalization is the process of organizing data to reduce redundancy and improve integrity." },
    { id: 8, title: "Primary and Foreign Keys", content: "Primary keys uniquely identify records, while foreign keys establish relationships between tables." },
    { id: 9, title: "Database Transactions", content: "Transactions ensure data consistency and are typically used to perform multiple operations as a single unit." },
    { id: 10, title: "Indexes in Databases", content: "Indexes speed up database queries by creating references to data for faster access." },
    { id: 11, title: "Views in Databases", content: "A database view is a virtual table created by a query that provides a simplified interface to complex queries." },
    { id: 12, title: "Stored Procedures", content: "Stored procedures are reusable SQL code stored in the database for performing operations." },
    { id: 13, title: "Database Backup and Recovery", content: "Backups ensure data safety, while recovery restores data in case of failures or corruption." },
    { id: 14, title: "Database Security", content: "Database security includes practices like authentication, authorization, and encryption to protect data." },
    { id: 15, title: "Data Warehousing", content: "A data warehouse is a central repository for integrated data from multiple sources, used for analysis and reporting." },
  ];

  return (
    <div>

      <main className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
        {/* Left Tab Panel */}
        <div className="w-full lg:w-1/4 bg-gray-100 p-4 h-screen overflow-y-auto dark:bg-gray-800">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 dark:text-gray-400">Database Topics</h2>
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Learn Databases</h1>
          <p className="text-xl text-gray-700 mb-4">
            Welcome to our database tutorial. Select a topic from the left to learn more about databases and their management!
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

export default Database;
