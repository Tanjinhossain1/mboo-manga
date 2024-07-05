import React from 'react';
import Link from 'next/link';
// import { SearchIcon } from '@heroicons/react/solid';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-white font-bold text-xl">Logo</div>
          <div className="hidden md:flex space-x-4">
            <Link href="/">
             <p className="text-gray-300 hover:text-white">Home</p>
            </Link>
            <Link href="/new-manhwa">
             <p className="text-gray-300 hover:text-white">New Manhwa</p>
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <div className="relative text-gray-600">
            <input
              type="search"
              name="search"
              placeholder="Search"
              className="bg-gray-700 text-white rounded-full pl-4 pr-10 py-2 focus:outline-none"
            />
            <button type="submit" className="absolute right-0 top-0 mt-2 mr-2">
              {/* <Sear
              chIcon className="h-4 w-4 text-white" /> */}
              SER
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
