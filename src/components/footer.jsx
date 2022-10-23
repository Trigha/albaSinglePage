import React from 'react';
import Logo from '../assets/logofooter.png';
import Fb from '../assets/fb.svg';
import Ig from '../assets/ig.svg';
import Linkedin from '../assets/linkedin.svg';

function Footer() {
  return (
    <div class="flex justify-center">
      <div class="mt-16 border-t-2 w-[1100px] border-gray-300 flex flex-col items-center">
        <div class="container mx-auto">
          <div class="sm:flex sm:mt-8">
            <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row ml-10 ">
              <div class="flex flex-col">
                <img src={Logo} className="w-1/6" />
                <span class="mt-7 text-sm text-[#272727]">
                  Albatech acts as a corporate partner to helpdigitize their
                  business
                </span>
                <span class="text-sm text-[#272727]">
                  to accelerate trends in remote work.
                </span>
                <span class="my-7 flex flex-row space-x-5">
                  <img src={Fb} />
                  <img src={Ig} />
                  <img src={Linkedin} />
                </span>
              </div>
              <div class="flex flex-col mr-52">
                <span class="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                  Website
                </span>
                <span class="my-2">
                  <a href="#" class="text-blue-700 text-md hover:text-blue-500">
                    About
                  </a>
                </span>
                <span class="my-2">
                  <a
                    href="#"
                    class="text-blue-700  text-md hover:text-blue-500"
                  >
                    Service
                  </a>
                </span>
                <span class="my-2">
                  <a href="#" class="text-blue-700 text-md hover:text-blue-500">
                    Portofolio
                  </a>
                </span>
                <span class="my-2">
                  <a href="#" class="text-blue-700 text-md hover:text-blue-500">
                    Blog
                  </a>
                </span>
                <span class="my-2">
                  <a href="#" class="text-blue-700 text-md hover:text-blue-500">
                    Career
                  </a>
                </span>
              </div>
              <div class="flex flex-col">
                <span class="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                  Contact
                </span>
                <span class="mt-7 text-sm text-[#272727]">
                  The Prominence Blok 38D No.25
                </span>
                <span class="text-sm text-[#272727]">
                  Jl. Jalur Sutera Barat, Alam Sutera,
                </span>
                <span class="text-sm text-[#272727]">
                  Kota Tanggerang, Banten 15143
                </span>
                <span class="my-2">
                  <span className="font-bold">P :</span> +62 81 1889 3383
                </span>
                <span class="my-2">
                  <span className="font-bold">E :</span> &nbsp;info@albatech.id
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="container mx-auto px-6">
          <div class="mt-16 border-t-2 border-gray-300 flex  justify-between">
            <h1 className="text-sm text-[#C4C4C4] py-3 sm:w2/3">
              ©PT. Alba Digital Teknologi 2021 | All Right Reserved
            </h1>
            <h1 className="text-sm text-[#C4C4C4] py-3 sm:w2/3">
              Privacy policy | Terms of service
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
