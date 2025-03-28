// src/components/Navbar.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ darkMode, setDarkMode }) { // Include darkMode and setDarkMode here
  useEffect(() => {
    const toggleOpen = document.getElementById('toggleOpen');
    const toggleClose = document.getElementById('toggleClose');
    const collapseMenu = document.getElementById('collapseMenu');

    function handleClick() {
      if (collapseMenu.style.display === 'block') {
        collapseMenu.style.display = 'none';
      } else {
        collapseMenu.style.display = 'block';
      }
    }

    toggleOpen.addEventListener('click', handleClick);
    toggleClose.addEventListener('click', handleClick);

    // Cleanup event listeners on component unmount
    return () => {
      toggleOpen.removeEventListener('click', handleClick);
      toggleClose.removeEventListener('click', handleClick);
    };
  }, []);


  return (
    <header class='shadow-md font-[sans-serif] tracking-wide relative z-50'>
      <section
        class='md:flex lg:items-center relative py-3 lg:px-10 px-4 border-gray-200 border-b bg-white lg:min-h-[80px] max-lg:min-h-[60px] dark:bg-gray-800'>
        <a href="/" class="max-sm:w-full max-sm:mb-3 shrink-0"><img
          src="https://www.vhv.rs/dpng/d/556-5561873_elearning-e-learning-logo-png-transparent-png.png" alt="logo" class='w-[160px]' />
        </a>

        <div class='flex flex-wrap w-full items-center'>
          <input type='text' placeholder='Search Your favourite course...'
            class='xl:w-96 max-lg:w-full lg:ml-10 max-md:mt-4 max-lg:ml-4 bg-gray-100 dark:bg-gray-800 focus:bg-transparent px-6 rounded h-11 outline-[#333] text-sm transition-all border border-orange-600' />
          <div class="ml-auto max-lg:mt-4">

            <ul class='flex items-center'>

              <li class='max-sm:hidden flex text-[15px] max-lg:py-2 px-3 font-medium text-[#333] dark:text-gray-300 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="mr-2 fill-current text-gray-800 dark:text-yellow-400" viewBox="0 0 24 24">
                  <g data-name="Layer 2">
                    <path
                      d="M14.5 12.75A3.22 3.22 0 0 1 12 11.6a3.27 3.27 0 0 1-2.5 1.15A3.22 3.22 0 0 1 7 11.6a2.91 2.91 0 0 1-.3.31 3.22 3.22 0 0 1-2.51.82 3.35 3.35 0 0 1-2.94-3.37v-.71a4.76 4.76 0 0 1 .24-1.5l1.57-4.7a1.75 1.75 0 0 1 1.66-1.2h14.56a1.75 1.75 0 0 1 1.66 1.2l1.57 4.7a4.76 4.76 0 0 1 .24 1.5v.71a3.35 3.35 0 0 1-2.92 3.37 3.2 3.2 0 0 1-2.51-.82c-.11-.1-.22-.22-.32-.33a3.28 3.28 0 0 1-2.5 1.17zm-9.78-10a.26.26 0 0 0-.24.17l-1.56 4.7a3.27 3.27 0 0 0-.17 1v.71a1.84 1.84 0 0 0 1.57 1.88A1.75 1.75 0 0 0 6.25 9.5a.75.75 0 0 1 1.5 0 1.67 1.67 0 0 0 1.75 1.75 1.76 1.76 0 0 0 1.75-1.75.75.75 0 0 1 1.5 0 1.67 1.67 0 0 0 1.75 1.75 1.76 1.76 0 0 0 1.75-1.75.75.75 0 0 1 1.5 0 1.75 1.75 0 0 0 1.93 1.74 1.84 1.84 0 0 0 1.57-1.88v-.71a3.27 3.27 0 0 0-.17-1l-1.56-4.7a.26.26 0 0 0-.24-.17z"
                      data-original="#000000" />
                    <path
                      d="M20 22.75H4A1.76 1.76 0 0 1 2.25 21v-9.52a.75.75 0 0 1 1.5 0V21a.25.25 0 0 0 .25.25h16a.25.25 0 0 0 .25-.25v-9.53a.75.75 0 1 1 1.5 0V21A1.76 1.76 0 0 1 20 22.75z"
                      data-original="#000000" />
                    <path
                      d="M15.5 22.75h-7a.76.76 0 0 1-.75-.75v-5a1.76 1.76 0 0 1 1.75-1.75h5A1.76 1.76 0 0 1 16.25 17v5a.76.76 0 0 1-.75.75zm-6.25-1.5h5.5V17a.25.25 0 0 0-.25-.25h-5a.25.25 0 0 0-.25.25z"
                      data-original="#000000" />
                  </g>
                </svg>
                Library
              </li>
              <li class='max-sm:hidden flex text-[15px] max-lg:py-2 px-3 font-medium text-[#333] dark:text-gray-300 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="mr-2 fill-current text-gray-800 dark:text-yellow-400" viewBox="0 0 512 511">
                  <path
                    d="M497 193.3h-40.168c-1.215 0-2.418.052-3.613.13-9.024-8.051-19.004-14.7-29.68-19.82 24.348-17.294 40.262-45.712 40.262-77.778C463.8 43.266 421.035.5 368.469.5c-52.57 0-95.336 42.766-95.336 95.332 0 25.262 9.883 48.258 25.976 65.332h-70.148c16.094-17.074 25.973-40.07 25.973-65.332C254.934 43.266 212.168.5 159.602.5c-52.567 0-95.336 42.766-95.336 95.332 0 29.48 13.453 55.875 34.539 73.379-14.602 5.457-28.149 13.617-40.028 24.219a55.211 55.211 0 0 0-3.609-.13H15c-8.285 0-15 6.716-15 15v80.333c0 8.285 6.715 15 15 15h1.066v113.535c0 8.281 6.715 15 15 15h449.868c8.285 0 15-6.719 15-15V303.633H497c8.285 0 15-6.715 15-15V208.3c0-8.285-6.715-15-15-15zm-15 80.333h-25.168c-13.875 0-25.168-11.29-25.168-25.168 0-13.875 11.293-25.164 25.168-25.164H482zM303.133 95.832c0-36.023 29.308-65.332 65.332-65.332 36.023 0 65.336 29.309 65.336 65.332 0 36.027-29.309 65.332-65.332 65.332-36.028 0-65.336-29.305-65.336-65.332zM159.602 30.5c36.023 0 65.332 29.309 65.332 65.332 0 36.023-29.309 65.332-65.332 65.332-36.028 0-65.336-29.305-65.336-65.332 0-36.023 29.308-65.332 65.336-65.332zM30 223.3h25.168c13.875 0 25.168 11.29 25.168 25.169 0 13.875-11.293 25.164-25.168 25.164H30zm16.066 80.333h9.102c30.418 0 55.168-24.746 55.168-55.168 0-16.844-7.602-31.942-19.54-42.067h.356c15.504-9.918 33.535-15.23 52.383-15.23h142.887C258.664 214.566 241 249.574 241 288.633v113.535H110.332v-65.336c0-8.281-6.715-15-15-15-8.281 0-15 6.719-15 15v65.332H46.066zm419.868 98.531h-34.27v-65.332c0-8.281-6.715-15-15-15-8.281 0-15 6.719-15 15v65.332H271V288.633c0-53.742 43.723-97.465 97.469-97.465 18.933 0 37.039 5.36 52.582 15.36-11.852 10.128-19.383 25.163-19.383 41.94 0 30.419 24.746 55.165 55.168 55.165h9.098zm0 0"
                    data-original="#000000" />
                </svg>
                Courses
              </li>
              <li class='max-sm:hidden flex text-[15px] max-lg:py-2 px-3 font-medium text-[#333] dark:text-gray-300 cursor-pointer'>
                <a href="/certifications" class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="mr-2 fill-current text-gray-800 dark:text-yellow-400" viewBox="0 0 512 512">
                    <path
                      d="M369.9 33.7c10.6-10.6 27.7-10.6 38.3 0 10.6 10.6 10.6 27.7 0 38.3l-39.4 39.4c-10.6 10.6-27.7 10.6-38.3 0-10.6-10.6-10.6-27.7 0-38.3l39.4-39.4zM256 272c-28.3 0-51.5 23.2-51.5 51.5S227.7 375 256 375s51.5-23.2 51.5-51.5S284.3 272 256 272zm0 92.7c-22.8 0-41.2-18.4-41.2-41.2s18.4-41.2 41.2-41.2 41.2 18.4 41.2 41.2-18.4 41.2-41.2 41.2zM256 75c-92.5 0-167.5 75-167.5 167.5v65.1c0 7.3 5.9 13.2 13.2 13.2h25.1c7.3 0 13.2-5.9 13.2-13.2v-39.7c0-57.1 46.3-103.3 103.3-103.3s103.3 46.3 103.3 103.3v39.7c0 7.3 5.9 13.2 13.2 13.2h25.1c7.3 0 13.2-5.9 13.2-13.2v-65.1c0-92.5-75-167.5-167.5-167.5zM198.4 198.4c6.7-6.7 17.5-6.7 24.2 0l20.5 20.5c6.7 6.7 6.7 17.5 0 24.2-6.7 6.7-17.5 6.7-24.2 0l-20.5-20.5c-6.7-6.7-6.7-17.5 0-24.2zm122.7 0c6.7-6.7 17.5-6.7 24.2 0l20.5 20.5c6.7 6.7 6.7 17.5 0 24.2-6.7 6.7-17.5 6.7-24.2 0l-20.5-20.5c-6.7-6.7-6.7-17.5 0-24.2z"
                    />
                  </svg>
                  Certifications
                </a>
              </li>

              <li class='max-lg:py-2 px-3 cursor-pointer'>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="flex items-center justify-center w-5 h-5 rounded-full transition-all ease-in-out"
                >
                  <i
                    className={`fa ${darkMode ? 'fa-moon' : 'fa-sun'} text-gray-800 dark:text-yellow-400 text-md transform transition-transform duration-300`}
                  ></i>
                </button>
              </li>
              <li class='max-lg:py-2 px-3 cursor-pointer'>
                <span class="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="INLINE fill-current text-gray-800 dark:text-yellow-400" viewBox="0 0 512 512">
                    <path
                      d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                      data-original="#000000"></path>
                  </svg>
                  <span
                    class="absolute left-auto -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
                </span>
              </li>
              <li class='flex text-[15px] max-lg:py-2 px-3 hover:text-[#007bff] hover:fill-[#007bff]'>
                <Link to="/Login">
                  <button className="px-4 py-2 rounded text-sm tracking-wider font-semibold border border-orange-600 outline-none bg-transparent hover:bg-orange-600 hover:text-white dark:text-gray-100 transition-all duration-300">
                    LogIn
                  </button>
                </Link>
              </li>
              <li id="toggleOpen" class='lg:hidden'>
                <button>
                  <svg class="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"></path>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div id="collapseMenu"
        class='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
        <button id="toggleClose" class='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-black" viewBox="0 0 320.591 320.591">
            <path
              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              data-original="#000000"></path>
            <path
              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              data-original="#000000"></path>
          </svg>
        </button>

        <ul class="lg:flex lg:flex-wrap lg:items-center lg:justify-center px-10 py-3 bg-gray-800 min-h-[46px] gap-4 max-lg:space-y-4 max-lg:fixed max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
          <li class="mb-6 hidden max-lg:block">
            <a href="javascript:void(0)">
              <img src="https://www.vhv.rs/dpng/d/556-5561873_elearning-e-learning-logo-png-transparent-png.png" alt="logo" class="w-36" />
            </a>
          </li>
          <Link to="/Html" className="hover:text-yellow-300 text-white text-[15px] font-medium block max-lg:border-b max-lg:py-3 px-3"> HTML</Link>
          <Link to="/Css" className="hover:text-yellow-300 text-white text-[15px] font-medium block max-lg:border-b max-lg:py-3 px-3"> Css</Link>
          <li class="max-lg:border-b max-lg:py-3 px-3"><a href="/Javascript" class="hover:text-yellow-300 text-white text-[15px] font-medium block">Javascript</a></li>
          <li className="max-lg:border-b max-lg:py-3 px-3">
            <Link to="/php" className="hover:text-yellow-300 text-white text-[15px] font-medium block">PHP</Link>
          </li>
          <li className="max-lg:border-b max-lg:py-3 px-3">
            <Link to="/laravel" className="hover:text-yellow-300 text-white text-[15px] font-medium block">Laravel</Link>
          </li>
          <li className="max-lg:border-b max-lg:py-3 px-3">
            <Link to="/mysql" className="hover:text-yellow-300 text-white text-[15px] font-medium block">MySQL</Link>
          </li>
          <li className="max-lg:border-b max-lg:py-3 px-3">
            <Link to="/database" className="hover:text-yellow-300 text-white text-[15px] font-medium block">Database</Link>
          </li>
          <li className="max-lg:border-b max-lg:py-3 px-3">
            <Link to="/tailwind" className="hover:text-yellow-300 text-white text-[15px] font-medium block">Tailwind Css</Link>
          </li>
          <li className="max-lg:border-b max-lg:py-3 px-3">
            <Link to="/react" className="hover:text-yellow-300 text-white text-[15px] font-medium block">React JS</Link>
          </li>
          <li className="max-lg:border-b max-lg:py-3 px-3">
            <Link to="/reactnative" className="hover:text-yellow-300 text-white text-[15px] font-medium block">React Native</Link>
          </li>
          <li className="max-lg:border-b max-lg:py-3 px-3">
            <Link to="/angular" className="hover:text-yellow-300 text-white text-[15px] font-medium block">Angular</Link>
          </li>
          <li className="max-lg:border-b max-lg:py-3 px-3">
            <Link to="/node" className="hover:text-yellow-300 text-white text-[15px] font-medium block">Node Js</Link>
          </li>
          <li className="max-lg:border-b max-lg:py-3 px-3">
            <Link to="/vue" className="hover:text-yellow-300 text-white text-[15px] font-medium block">Vue Js</Link>
          </li>
          {/* <li class="max-lg:border-b max-lg:py-3 px-3"><a href="javascript:void(0)" class="hover:text-yellow-300 text-white text-[15px] font-medium block">Python</a></li> */}
          {/* <li class="max-lg:border-b max-lg:py-3 px-3"><a href="javascript:void(0)" class="hover:text-yellow-300 text-white text-[15px] font-medium block">TypeScript</a></li> */}
        </ul>

      </div>
    </header>
  );
}

export default Navbar;
