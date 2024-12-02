import React, { useState } from "react";
import { assets } from "../assets/assets.js";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className="navbar shadow-md fixed top-0 left-0 w-full z-50 bg-white">
      <div className="navbar">
        <div className="navbar-start w-auto">
          <a className="btn btn-ghost text-xl">
            <h4>jobRinger</h4>
          </a>
        </div>

        <div className="ms-auto">
          <div className="dropdown md:hidden">
            <div onClick={toggleMenu} tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </div>

            <div
              tabIndex={0}
              className={`fixed top-[14%] right-0 h-full bg-white shadow-md transform ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              } transition-transform duration-300 ease-in-out px-5 py-8 md:static md:flex md:gap-6 md:shadow-none`}
            >
              <ul className="flex flex-col gap-3 ps-4 pt-4">
                <li>
                  <a className="text-sm font-medium text-black" href="#">
                    Jobs
                  </a>
                </li>

                <li>
                  <a className="text-sm font-medium text-black" href="#">
                    Active Employees
                  </a>
                </li>

                <li>
                  <a className="text-sm font-medium text-black" href="#">
                    Pricing
                  </a>
                </li>

                <li>
                  <button className="btn bg-transparent text-sm font-medium border-gray-400 hover:bg-yellow text-black hover:border-yellow transition-all">
                    Jobseeker Login
                  </button>
                </li>

                <li>
                  <button className="btn bg-yellow text-black font-sm font-medium border-yellow hover:bg-darkBlue hover:text-white transition-all">
                    Employer Login
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <ul className="px-1 items-center gap-6 hidden md:flex">
            <li>
              <a className="text-sm font-medium text-black" href="#">
                Jobs
              </a>
            </li>

            <li>
              <a className="text-sm font-medium text-black" href="#">
                Active Employees
              </a>
            </li>

            <li>
              <a className="text-sm font-medium text-black" href="#">
                Pricing
              </a>
            </li>

            <li>
              <button className="btn bg-transparent text-sm font-medium border-gray-400 hover:bg-yellow text-black hover:border-yellow transition-all">
                Jobseeker Login
              </button>
            </li>

            <li>
              <button className="btn bg-yellow text-black font-sm font-medium border-yellow hover:bg-darkBlue hover:text-white transition-all">
                Employer Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
