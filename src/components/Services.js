import React, { useState } from 'react';

function Courses() {
  const courses = [
    "HTML", "JavaScript", "Python", "Java", "SQL", "Linux", "C++", "DSA",
    "React", "Node.js", "Express", "MongoDB", "CSS", "TypeScript", "Kubernetes", "Docker",
    "AWS", "GraphQL", "Ruby on Rails", "Swift", "Go", "Flutter", "Firebase", "Machine Learning"
  ];

  const itemsPerPage = 12;
  const [startIndex, setStartIndex] = useState(0);

  // Function to go to the next set of items
  const handleNext = () => {
    if (startIndex + itemsPerPage < courses.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  // Function to go to the previous set of items
  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 dark:border-t dark:border-gray-400">
    <div className="max-w-7xl mx-auto font-[sans-serif] py-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-400">
          Start <span className="text-orange-600">Learning</span>
        </h2>

        {/* Slider controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className={`p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-400 rounded ${startIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            &#8592; Prev
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex + itemsPerPage >= courses.length}
            className={`p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-400 rounded ${startIndex + itemsPerPage >= courses.length ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Next &#8594;
          </button>
        </div>
      </div>

      {/* Course cards grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10 py-10"
        style={{
          background: "url('https://www.transparenttextures.com/patterns/cartographer.png')",
          padding: "20px",
          borderRadius: "8px"
        }}
      >
        {courses.slice(startIndex, startIndex + itemsPerPage).map((course) => (
          <div
            key={course}
            className="bg-white dark:bg-gray-700 dark:text-gray-300 text-center p-6 rounded-md shadow-md flex items-center justify-center text-lg font-bold cursor-pointer hover:bg-yellow-400 dark:hover:bg-yellow-500"
          >
            {course}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Courses;
