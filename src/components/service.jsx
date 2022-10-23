import React from 'react';
import Web from '../assets/web.svg';
import Mobile from '../assets/mobile.svg';
import Product from '../assets/product.svg';
import Mt from '../assets/mt.svg';
import Cms from '../assets/cms.svg';
import Pay from '../assets/pay.svg';
function Service() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center flex-col">
        <h5 className="text-[#C4C4C4] text-sm font-medium text-center mb-3">
          Complete Package
        </h5>
        <h1 className="font-bold md:text-4xl text-lg mx-auto mb-10">
          From product design to software continuous delivery
        </h1>

        <div className="flex flex-wrap flex-row mx-auto items-start">
          <div
            class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            style={{
              visibility: 'visible',
              animationsDuration: '1s',
              animationName: 'fadeInUp',
            }}
          >
            <div class="py-8 px-12 mb-12 bg-gray-50 border border-gray-500 transform transition duration-300 ease-in-out hover:-translate-y-2 w-[410px] h-[230px] hover:border-[#FFCE07]">
              <div class="inline-block text-gray-900 mb-4">
                <img src={Web} />
              </div>
              <h3 class="text-lg leading-normal mb-2 font-semibold text-[#FFCE07]">
                Website Development
              </h3>
              <p class="text-[#272727] whitespace-pre-line">
                High performance website to reach out more your potential
                customers
              </p>
            </div>
          </div>
          <div
            class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            style={{
              visibility: 'visible',
              animationsDuration: '1s',
              animationName: 'fadeInUp',
            }}
          >
            <div class="py-8 px-12 mb-12 bg-gray-50 border border-gray-500 transform transition duration-300 ease-in-out hover:-translate-y-2 w-[410px] h-[230px] hover:border-[#FFCE07]">
              <div class="inline-block text-gray-900 mb-4">
                <img src={Mobile} />
              </div>
              <h3 class="text-lg leading-normal mb-2 font-semibold text-[#FFCE07]">
                Mobile apps Development
              </h3>
              <p class="text-gray-500">To accelerate your business process</p>
            </div>
          </div>
          <div
            class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            style={{
              visibility: 'visible',
              animationsDuration: '1s',
              animationName: 'fadeInUp',
            }}
          >
            <div class="py-8 px-12 mb-12 bg-gray-50 border border-gray-500 transform transition duration-300 ease-in-out hover:-translate-y-2 w-[410px] h-[230px] hover:border-[#FFCE07]">
              <div class="inline-block text-gray-900 mb-4">
                <img src={Product} />
              </div>
              <h3 class="text-lg leading-normal mb-2 font-semibold text-[#FFCE07]">
                Digital product design
              </h3>
              <p class="text-gray-500">
                Complete digital product creations from UX prototyping to final
                UI design
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap flex-row mx-auto items-start">
          <div
            class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            style={{
              visibility: 'visible',
              animationsDuration: '1s',
              animationName: 'fadeInUp',
            }}
          >
            <div class="py-8 px-12 mb-12 bg-gray-50 border border-gray-500 transform transition duration-300 ease-in-out hover:-translate-y-2 w-[410px] h-[230px] hover:border-[#FFCE07]">
              <div class="inline-block text-gray-900 mb-4">
                <img src={Web} />
              </div>
              <h3 class="text-lg leading-normal mb-2 font-semibold text-[#FFCE07]">
                Website Development
              </h3>
              <p class="text-[#272727] whitespace-pre-line">
                High performance website to reach out more your potential
                customers
              </p>
            </div>
          </div>
          <div
            class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            style={{
              visibility: 'visible',
              animationsDuration: '1s',
              animationName: 'fadeInUp',
            }}
          >
            <div class="py-8 px-12 mb-12 bg-gray-50 border border-gray-500 transform transition duration-300 ease-in-out hover:-translate-y-2 w-[410px] h-[230px] hover:border-[#FFCE07]">
              <div class="inline-block text-gray-900 mb-4">
                <img src={Mobile} />
              </div>
              <h3 class="text-lg leading-normal mb-2 font-semibold text-[#FFCE07]">
                Mobile apps Development
              </h3>
              <p class="text-gray-500">To accelerate your business process</p>
            </div>
          </div>
          <div
            class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            style={{
              visibility: 'visible',
              animationsDuration: '1s',
              animationName: 'fadeInUp',
            }}
          >
            <div class="py-8 px-12 mb-12 bg-gray-50 border border-gray-500 transform transition duration-300 ease-in-out hover:-translate-y-2 w-[410px] h-[230px] hover:border-[#FFCE07]">
              <div class="inline-block text-gray-900 mb-4">
                <img src={Product} />
              </div>
              <h3 class="text-lg leading-normal mb-2 font-semibold text-[#FFCE07]">
                Digital product design
              </h3>
              <p class="text-gray-500">
                Complete digital product creations from UX prototyping to final
                UI design
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
