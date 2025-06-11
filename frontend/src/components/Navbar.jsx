import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // Hide navbar on login and signup pages
  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          AssetManager
        </Link>
        <div className="space-x-4">
          <Link to="/assets" className="text-gray-700 hover:text-indigo-600 font-medium">
            Assets
          </Link>
          <Link to="/create-asset" className="text-gray-700 hover:text-indigo-600 font-medium">
            Create Asset
          </Link>
          <Link to="/requests" className="text-gray-700 hover:text-indigo-600 font-medium">
            Requests
          </Link>
          <Link to="/login" className="text-gray-700 hover:text-indigo-600 font-medium">
            Login
          </Link>
          <Link to="/signup" className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded font-medium">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
