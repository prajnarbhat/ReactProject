import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/images1.jpg";

const Navbar = () => {
  return (
    <>
    <nav className="bg-gray-700 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="logo" className="h-10 w-10 rounded-full" />
          <h3 className="text-xl font-bold">PopX Account</h3>
        </div>

        <ul className="flex space-x-6">
          <li>
            <Link to="/"
              className="hover:text-blue-300 transition-colors duration-200 text-base font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link to="/register"
              className="hover:text-blue-300 transition-colors duration-200 text-base font-medium">
              Register
            </Link>
          </li>
          <li>
            <Link to="/signin"
              className="hover:text-blue-300 transition-colors duration-200 text-base font-medium">
              Signin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
