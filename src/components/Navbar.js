import { Link } from 'react-router-dom';
import { GoMarkGithub } from 'react-icons/go';
import { FcLandscape, FcNightLandscape } from 'react-icons/fc';
import { useState } from 'react';
import { useAuth } from '../firebase/AuthContext';
import { useAppContext } from '../context/context';
function Navbar() {
  const { isDarkMode, setIsDarkMode } = useAppContext();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const { user, logout } = useAuth();
  return (
    <header>
      <nav className="dark:border-b dark:border-gray-400 px-4 lg:px-6 py-2.5 bg-cyan-400 bg-opacity-40 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to={'/'} className="flex gap-2 items-center">
            <GoMarkGithub className="text-white" size={25} />
            <span className="text-sm md:text-lg font-semibold text-white">
              Github Searcher
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            {isDarkMode ? (
              <FcLandscape
                onClick={() => setIsDarkMode(false)}
                className="hidden cursor-pointer lg:flex mx-5"
                size={30}
              />
            ) : (
              <FcNightLandscape
                onClick={() => setIsDarkMode(true)}
                className="hidden cursor-pointer lg:flex mx-5"
                size={30}
              />
            )}

            {user ? (
              <Link
                to={'/signin'}
                onClick={logout}
                className="text-white
                select-none
               bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Logout
              </Link>
            ) : (
              <Link
                to={'/signin'}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Login
              </Link>
            )}

            <button
              onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              !isHamburgerOpen && 'hidden'
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row text-center lg:space-x-8 lg:mt-0 space-y-2">
              <li
                onClick={() => setIsDarkMode((prev) => !prev)}
                className="block py-2 pr-4 pl-3 text-white rounded dark:bg-black bg-blue-500 lg:bg-transparent lg:hidden lg:text-white lg:p-0 dark:text-white cursor-pointer select-none"
              >
                {isDarkMode ? 'Turn off dark mode' : 'Turn on dark mode'}
              </li>
              <li>
                <div className="block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-white lg:p-0 dark:text-white cursor-pointer">
                  {!isHamburgerOpen ? (
                    'Welcome Back, Çetin'
                  ) : (
                    <Link to={'/'}>Home</Link>
                  )}
                </div>
              </li>
              <li>
                <Link
                  to={'/about'}
                  className="block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:hidden dark:text-white cursor-pointer"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
