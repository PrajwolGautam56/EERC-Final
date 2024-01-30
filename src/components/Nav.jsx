import React, { useState } from "react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
        <img
          src="public/images/eercLogo.png"
          className="w-100 h-10 mr-2"
          alt="Logo"
        />
      </div>
      <div className="block lg:hidden bg-white">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow text-white">
          <ul className="flex ">
            <Link to="/">
              <li className="flex-1 ">Home</li>
            </Link>

            <Link to="/about">
              <li className="flex-1 mx-12">About</li>
            </Link>

            <Link to="/blogs">
              <li className="flex-1 mx-12">Blog</li>
            </Link>

            <Link to="/projects">
              <li className="flex-1 mx-12">Projects</li>
            </Link>

            <Link to="/contact">
              <li className="flex-1 mx-12">Contact</li>
            </Link>
          </ul>
        </div>

        <div className="flex justify-end ">
          <Button gradientMonochrome="pink" className="right-0 mt-4 ml-64">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 right-0"
            >
              Contact <span aria-hidden="true">&rarr;</span>
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
