import React, { useState } from 'react';

export default function DropdownHoverYear() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="text-black w-32 -ml-6 md:ml-1 bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none  focus:ring-gray-300 font-medium rounded-lg text-base  md:text-md  px-3 md:px-2 py-1 md:py-2 text-center inline-flex items-center dark:bg-gray-300 dark:hover:bg-gray-400 dark:focus:ring-gray-400"
        type="button"
      >
        AY 2024-25
        <svg
          className="w-3 md:w-4 h-3 md:h-4 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="absolute bg-gray-200 divide-y divide-gray-100 rounded-lg shadow w-36 sm:w-44 lg:w-48 dark:bg-gray-200 z-20"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-black">
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                AY 2025-26
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                AY 2026-27
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
