import React from 'react';
import Logo from '../assets/logo.svg';

function Header() {
  return (
    <div>
      <nav class="bg-white border-black px-4 lg:px-6 py-2.5 border-b-4 fixed w-full top-0 z-50">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" class="flex items-center">
            <img src={Logo} class="mr-3 h-6 sm:h-9" alt="Music logo" />
          </a>
          <div class="flex items-center lg:order-2">
            <button
              id="nav-icon"
              data-collapse-toggle="mobile-menu-2"
              type="button"
              class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 mx-auto"
            id="mobile-menu-2"
          >
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-16 lg:mt-0">
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-blue-700 lg:p-0 "
                  aria-current="page"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
                >
                  Service
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
                >
                  Portofolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
                >
                  Career
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:flex lg:flex-col lg:items-end lg:order-2 hidden">
            <button className="bg-[#FFCE07] w-[188px] h-[50px] rounded-[30px] hover:bg-yellow-300">
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
