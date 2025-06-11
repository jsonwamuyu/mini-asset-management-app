import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center py-4 text-sm text-gray-500">
      © 2025 Mini Asset Manager. All rights reserved.
      <br />
      <Link to="/privacy" className="text-green-600 hover:underline">
        Privacy Policy
      </Link>
      <span className="mx-2">|</span>
      <Link to="/terms" className="text-green-600 hover:underline">
        Terms of Service
      </Link>
    </footer>
  );
};

export default Footer;
