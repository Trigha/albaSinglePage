import React from 'react';
import BgTop from '../assets/background.svg';
import Line from '../assets/line.png';
import Dot from '../assets/dot.svg';
function Hero() {
  return (
    <div>
      <div class="bg-white text-white">
        <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
          <div class="flex flex-col lg:w-1/3 justify-center items-start ">
            <div className="md:bg-white md:w-[480px] md:shadow-md md:ml-48 mx-auto z-50 mb-7">
              <h1 class="text-3xl px-5 py-3 font-extrabold md:text-5xl p-2 text-black shadow-lg border-1">
                Build or scale up
              </h1>
            </div>
            <div className="md:w-[700px] md:ml-48 mx-auto z-50 mb-5">
              <h2 class="text-3xl md:text-5xl  md:leading-snug mb-2 text-black ">
                your development team
              </h2>
            </div>
            <div className="flex flex-row md:ml-48 mx-auto mb-5">
              <img src={Line} className="w-[75px] h-[5px] mt-3 mr-5" />

              <p class="text-lg font-semibold md:text-base mb-4 text-black before:first-letter:border-2 border-yellow-500">
                in weeks, not months
              </p>

              <img
                src={Line}
                className="w-[75px] h-[5px] mt-3 ml-5 md:hidden"
              />
            </div>

            <a
              href="/login"
              class="md:ml-48 mx-auto mb-5 bg-[#FFCE07] text-sm font-bold hover:bg-yellow-300 text-black hover:text-black rounded-[30px] shadow hover:shadow-lg py-4 px-10 border border-yellow-300 hover:border-yellow-300"
            >
              Book Now
            </a>
          </div>
          <div className="bg-cover">
            <img src={BgTop} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
