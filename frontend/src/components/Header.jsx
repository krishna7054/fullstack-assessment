import React from "react";
import { Search, HelpCircle,Settings2 } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-60 flex h-16 items-center px-4 border-b bg-white z-10">
      {/* Search Bar */}
      <div className="flex flex-1 items-center space-x-4">
        <div className="relative w-96">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search your course"
            className="pl-8 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Header Icons and Profile */}
      <div className="flex items-center  space-x-6 ">
        <HelpCircle className="h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-900" />
        {/* <MessageSquare  /> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-square-dot  cursor-pointer text-gray-500 hover:text-gray-900">
  <path d="M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7" />
  <circle cx="18" cy="6" r="3" fill="red" />
</svg>

        <Settings2 className="h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-900" />
        {/* <Bell className="h-6 w-6 cursor-pointer hover:text-gray-500" /> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bell-dot cursor-pointer text-gray-500 hover:text-gray-900">
  <path d="M10.268 21a2 2 0 0 0 3.464 0" />
  <path d="M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665" />
  <circle cx="18" cy="8" r="3" fill="red" />
</svg>

        <div className="flex items-center space-x-2">
          <img
            src="src\assets\t1.jpeg"
            alt="Avatar"
            className="h-8 w-8 rounded-md border border-gray-300"
          />
          <span className="font-medium">Adeline H. Dancy</span>
        </div>
      </div>
    </header>
  );
}
