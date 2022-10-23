import React from 'react';
import Phones from '../assets/phones.svg';
import Tablet from '../assets/tablet.png';
import Gadget from '../assets/gadget.png';

function Portofolio() {
  return (
    <div className="flex flex-col justify-center mt-10">
      <div className="flex justify-center flex-col">
        <h5 className="text-[#C4C4C4] text-sm font-medium text-center mb-3">
          Portofolio
        </h5>
        <h1 className="font-bold md:text-4xl text-lg mx-auto">
          The software that we build
        </h1>
        <h1 className="font-bold md:text-4xl text-lg mx-auto mb-10">
          Take our clients to the next level
        </h1>
      </div>
      <div className="flex flex-wrap flex-row mx-auto items-center">
        <div
          class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
          data-wow-duration="1s"
          style={{
            visibility: 'visible',
            animationsDuration: '1s',
            animationName: 'fadeInUp',
          }}
        >
          <div class="mb-12 transform transition duration-300 ease-in-out hover:-translate-y-2 ">
            <img src={Phones} className="w-[410px]" />
            <div className="bg-gray-50 border border-t-0 border-gray-500 transform transition duration-300 ease-in-out hover:-translate-y-2 hover:border-[#FFCE07] px-5 py-5 w-[410px] h-[200px]">
              <p class="text-[#C4C4C4] text-sm whitespace-pre-line mb-2">
                Mobile apps
              </p>
              <h3 class="text-lg leading-normal mb-2 font-bold text-[#FFCE07]">
                ILIOS app (B2B E-Commerce)
              </h3>
              <p class="text-[#272727] whitespace-pre-line">
                Has unique selling point where not all companies offer
                applications for sales, data collection and management
              </p>
            </div>
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
          <div class="mb-12 transform transition duration-300 ease-in-out hover:-translate-y-2 ">
            <img src={Gadget} className="w-[410px]" />
            <div className="bg-gray-50 border border-t-0 border-gray-500 transform transition duration-300 ease-in-out hover:-translate-y-2 hover:border-[#FFCE07] px-5 py-5 w-[410px] h-[200px]">
              <p class="text-[#C4C4C4] text-sm whitespace-pre-line mb-2">
                Website development
              </p>
              <h3 class="text-lg leading-normal mb-2 font-bold text-[#FFCE07]">
                Home and Living
              </h3>
              <p class="text-[#272727] whitespace-pre-line">
                Albatech's helps in creating a website catalog to show brand
                identity and information in accordance With vision and mission
                of Home and Living
              </p>
            </div>
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
          <div class="mb-12 transform transition duration-300 ease-in-out hover:-translate-y-2 ">
            <img src={Tablet} className="w-[410px]" />
            <div className="bg-gray-50 border border-t-0 border-gray-500 transform transition duration-300 ease-in-out hover:-translate-y-2 hover:border-[#FFCE07] px-5 py-5 w-[410px] h-[200px]">
              <p class="text-[#C4C4C4] text-sm whitespace-pre-line mb-2">
                Website development
              </p>
              <h3 class="text-lg leading-normal mb-2 font-bold text-[#FFCE07]">
                HIPPO
              </h3>
              <p class="text-[#272727] whitespace-pre-line">
                Albatech's helps to create e-commerce and company profile for
                Hippo's Website with realtime transaction and integration with
                Payment gateway to accept multi payment
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:flex-col lg:items-end lg:order-2 hidden mx-auto">
          <a
            href="#"
            class=" mb-5 bg-[#FFCE07] text-sm font-bold hover:bg-yellow-300 text-black hover:text-black rounded-[30px] shadow hover:shadow-lg py-4 px-10 border border-yellow-300 hover:border-yellow-300"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portofolio;
