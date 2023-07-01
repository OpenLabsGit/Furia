import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = ({ ...props }) => {
  return (
    <div className="bg-gray-900">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-white text-2xl font-bold">Logo</div>

        <div className="space-x-6">
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
          >
            About
          </Link>

          <Link
            to="/products"
            className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
          >
            Products
          </Link>

          <Link
            to="/contact"
            className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
          >
            Contacts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
