import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Html = () => {
  const [activeFilter, setActiveFilter] = useState('all'); // Default filter to 'all'
  const [sortBy, setSortBy] = useState('title-asc'); // Default sorting by title in ascending order
  const [costFilter, setCostFilter] = useState('low-to-high'); // Default cost filter
  const [viewType, setViewType] = useState('grid'); // Default view type is grid

  // Certification card data with added categories and cost property
  const certifications = [
    { title: 'HTML', description: 'Master HTML and start creating web pages.', buttonText: 'Get Certified', link: '#html-certification', cost: 50, category: 'frontend', bgImage: 'https://www.shutterstock.com/image-illustration/gray-halftone-pattern-white-line-600nw-1657416001.jpg' },
    { title: 'CSS', description: 'Learn CSS to style your web pages.', buttonText: 'Get Certified', link: '#css-certification', cost: 40, category: 'frontend', bgImage: 'https://www.shutterstock.com/image-illustration/gray-halftone-pattern-white-line-600nw-1657416001.jpg' },
    { title: 'JavaScript', description: 'Learn JavaScript for interactivity.', buttonText: 'Get Certified', link: '#js-certification', cost: 60, category: 'frontend', bgImage: 'https://www.shutterstock.com/image-illustration/gray-halftone-pattern-white-line-600nw-1657416001.jpg' },
    { title: 'Python', description: 'Learn Python for web and software development.', buttonText: 'Get Certified', link: '#python-certification', cost: 70, category: 'backend', bgImage: 'https://www.shutterstock.com/image-illustration/gray-halftone-pattern-white-line-600nw-1657416001.jpg' },
    { title: 'React', description: 'Learn React for building UIs.', buttonText: 'Get Certified', link: '#react-certification', cost: 80, category: 'frontend', bgImage: 'https://www.shutterstock.com/image-illustration/gray-halftone-pattern-white-line-600nw-1657416001.jpg' },
    { title: 'Node.js', description: 'Master Node.js for building server-side applications.', buttonText: 'Get Certified', link: '#nodejs-certification', cost: 90, category: 'backend', bgImage: 'https://www.shutterstock.com/image-illustration/gray-halftone-pattern-white-line-600nw-1657416001.jpg' },
    { title: 'Vue.js', description: 'Learn Vue.js for building web apps.', buttonText: 'Get Certified', link: '#vuejs-certification', cost: 55, category: 'frontend', bgImage: 'https://www.shutterstock.com/image-illustration/gray-halftone-pattern-white-line-600nw-1657416001.jpg' },
    { title: 'Angular', description: 'Master Angular for single-page apps.', buttonText: 'Get Certified', link: '#angular-certification', cost: 75, category: 'frontend', bgImage: 'https://www.shutterstock.com/image-illustration/gray-halftone-pattern-white-line-600nw-1657416001.jpg' },
    { title: 'PHP', description: 'Learn PHP for server-side scripting.', buttonText: 'Get Certified', link: '#php-certification', cost: 40, category: 'backend', bgImage: 'https://www.shutterstock.com/image-illustration/gray-halftone-pattern-white-line-600nw-1657416001.jpg' },
    { title: 'SQL', description: 'Master SQL for managing databases.', buttonText: 'Get Certified', link: '#sql-certification', cost: 60, category: 'backend', bgImage: 'https://www.shutterstock.com/image-illustration/gray-halftone-pattern-white-line-600nw-1657416001.jpg' },
    // Add more certifications as needed...
  ];

  // Sort the certifications based on the selected sort option
  const sortedCertifications = [...certifications].sort((a, b) => {
    if (sortBy === 'title-asc') {
      return a.title.localeCompare(b.title); // A-Z sort
    } else if (sortBy === 'title-desc') {
      return b.title.localeCompare(a.title); // Z-A sort
    } else if (sortBy === 'price') {
      return costFilter === 'low-to-high' ? a.cost - b.cost : b.cost - a.cost;
    }
    return 0;
  });

  return (
    <div>
    

      <main className="min-h-screen bg-white flex flex-col lg:flex-row max-w-7xl mx-auto justify-center py-10">
        {/* Left Sidebar */}
        <div className="w-full lg:w-1/4 bg-gray-100 p-4 space-y-4">
          {/* Filter Topics */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Filter Topics</h2>
            <ul className="space-y-2">
              <li
                className={`cursor-pointer p-2 rounded-md ${activeFilter === 'all' ? 'bg-orange-500 text-gray-100' : 'bg-gray-100 text-gray-800'}`}
                onClick={() => setActiveFilter('all')}
              >
                All Topics
              </li>
              <li
                className={`cursor-pointer p-2 rounded-md ${activeFilter === 'frontend' ? 'bg-orange-500 text-gray-100' : 'bg-gray-100 text-gray-800'}`}
                onClick={() => setActiveFilter('frontend')}
              >
                Frontend Development
              </li>
              <li
                className={`cursor-pointer p-2 rounded-md ${activeFilter === 'backend' ? 'bg-orange-500 text-gray-100' : 'bg-gray-100 text-gray-800'}`}
                onClick={() => setActiveFilter('backend')}
              >
                Backend Development
              </li>
            </ul>
          </div>

          {/* Sort By Dropdown */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Sort By</h2>
            <select
              className="w-full p-2 border rounded-md"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="title-asc">A-Z (Title)</option>
              <option value="title-desc">Z-A (Title)</option>
              <option value="price">Sort by Price</option>
            </select>
          </div>

          {/* Cost Filter */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Filter by Cost</h2>
            <select
              className="w-full p-2 border rounded-md"
              value={costFilter}
              onChange={(e) => setCostFilter(e.target.value)}
            >
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>

          {/* View Type */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">View</h2>
            <button
              className={`cursor-pointer p-2 rounded-md ${viewType === 'grid' ? 'bg-orange-500 text-gray-100' : 'bg-gray-100 text-gray-800'}`}
              onClick={() => setViewType('grid')}
            >
              Grid View
            </button>
            <button
              className={`cursor-pointer p-2 rounded-md ${viewType === 'list' ? 'bg-orange-500 text-gray-100' : 'bg-gray-100 text-gray-800'}`}
              onClick={() => setViewType('list')}
            >
              List View
            </button>
          </div>
        </div>

        {/* Right Content Area (Certification Cards) */}
        <div className="flex-1 p-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Certification Programs</h1>
          <p className="text-xl text-gray-700 mb-6">Choose a topic to explore certification options:</p>

          <div className={viewType === 'grid' ? 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-4'}>
            {sortedCertifications
              .filter(cert => activeFilter === 'all' || cert.category === activeFilter)
              .map((cert, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg shadow-md relative group ${viewType === 'list' ? 'bg-white flex items-center space-x-4' : 'bg-cover bg-center hover:bg-gray-50'}`}
                  style={{ backgroundImage: `url(${cert.bgImage})` }}
                >
                  <div className="absolute inset-0  transition-all duration-300 rounded-lg"></div>
                  {viewType === 'list' ? (
                    <>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-800">{cert.title}</h3>
                        <p className="text-gray-700">{cert.description}</p>
                        <p className="text-gray-700">Cost: ${cert.cost}</p>
                      </div>
                      <a
                        href={cert.link}
                        className="text-white bg-orange-600 hover:bg-orange-700 px-6 py-2 rounded-md mt-4 opacity-100"
                      >
                        {cert.buttonText}
                      </a>
                    </>
                  ) : (
                    <>
                      <h3 className="text-2xl font-semibold text-gray-800">{cert.title}</h3>
                      <p className="text-gray-700 mb-4">{cert.description}</p>
                      <p className="text-gray-700 mb-4">Cost: ${cert.cost}</p>
                      <a
                        href={cert.link}
                        className="text-white bg-orange-600 hover:bg-orange-700 px-6 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        {cert.buttonText}
                      </a>
                    </>
                  )}
                </div>
              ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Html;
