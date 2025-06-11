import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">MyApp</div>
        <div>
          <a href="/" className="text-white hover:text-blue-200 px-3">
            Home
          </a>
          <a href="/about" className="text-white hover:text-blue-200 px-3">
            About
          </a>
          <a href="/contact" className="text-white hover:text-blue-200 px-3">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
