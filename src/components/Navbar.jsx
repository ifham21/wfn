import React from "react";
import { Link } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";
import { Search } from "lucide-react";
import logo from "../../src/logo.png"

const navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 shadow-md bg-white">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="WFN Logo" className="h-10" />
      </div>
      
      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-gray-700">
        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
        <li><Link to="/About" className="hover:text-gray-300">About</Link></li>
        <li><Link to="/Warehouses" className="hover:text-gray-300">Warehouses</Link></li>
        <li><Link to="/support" className="hover:text-gray-300">Support</Link></li>
      </ul>
      
      {/* Actions */}
      <div className="flex items-center space-x-4">
        <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
        <button className="px-4 py-2 border rounded-md">Sign In</button>
        <button className="px-4 py-2 bg-black text-white rounded-md">Register Now</button>
        <FaGlobe className="w-5 h-5 text-gray-600 cursor-pointer" />
      </div>
    </nav>
  );
};

export default navbar;
