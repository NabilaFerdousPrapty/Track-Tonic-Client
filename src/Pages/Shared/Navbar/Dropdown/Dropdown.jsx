import React, { useState } from 'react';
import { AiOutlineLogin } from "react-icons/ai";
import useAuth from '../../../../hooks/UseAuth';
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
const {user, setUser,LogOut} = useAuth();
  return (
    <div className="relative inline-block">

      {/* Dropdown toggle button */}
      <button
        onClick={toggleDropdown}
        className="relative z-10 flex items-center p-2 text-sm  bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring  focus:outline-none"
      >
        <span className="">
          <img
            className="object-cover w-8 h-8 rounded-full"
            src={user?.photoURL || 'https://randomuser.me/api/portraits'}
            alt="jane doe"
          />
        </span>
        <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z" fill="currentColor"></path>
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="absolute right-0 z-20 md:w-56 w-48 py-2 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800"
        >
          <a href="#" className="flex items-center p-2 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            <img
              className="flex-shrink-0 object-cover mx-1 rounded-full w-4 h-4"
              src={user?.photoURL || 'https://randomuser.me/api/portraits'}
              alt="jane avatar"
            />
            <div className=" text-center">
              <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                {user?.displayName || 'No Name'}
                 </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {user?.email || 'No Email'}
              </p>
            </div>
          </a>

          <hr className="border-gray-200 dark:border-gray-700" />

          <a href="#" className="block px-2 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white text-center">
            view profile
          </a>

          <a href="#" className="block px-2 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white text-center">
          Update Profile
          </a>

          <hr className="border-gray-200 dark:border-gray-700" />

          <button onClick={LogOut} className="block px-2 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white text-center w-full">
            log out
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
