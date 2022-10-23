import React from 'react';
import Amaze1 from '../assets/amaze1.png';
import Amaze2 from '../assets/amaze2.png';
import Amaze3 from '../assets/amaze3.png';
import Amaze4 from '../assets/amaze4.png';
import Partner from '../assets/partner.png';
import Petik1 from '../assets/petik1.svg';
import Petik2 from '../assets/petik2.png';

function Testimonial() {
  return (
    <div className="flex flex-col justify-center mt-10">
      <img
        src={Petik1}
        className="md:bg-cover md:w-1/12 absolute md:ml-56 xl:ml-24 xl:-mt-72 lg:ml-20 md:-mt-56 w-20 -mt-[300px]"
      />
      <div className="flex justify-center flex-col z-50">
        <h5 className="text-[#C4C4C4] text-sm font-medium text-center mb-3">
          Testimonial
        </h5>
        <h1 className="font-bold md:text-4xl text-lg mx-auto">
          What clients love in working
        </h1>
        <h1 className="font-bold md:text-4xl text-lg mx-auto mb-10">
          With Albatech Team
        </h1>
      </div>

      <div className="flex flex-col mx-auto mt-5">
        <div className="flex lg:flex-row flex-col lg:mb-24 mb-7">
          <img
            src={Amaze1}
            className="lg:mr-24 lg:w-1/4 lg:h-1/4 w-1/2 mx-auto lg:mb-0 mb-10"
          />
          <img
            src={Amaze2}
            className="lg:ml-36 lg:w-1/4 lg:h-1/4 w-1/2 mx-auto lg:mb-0"
          />
        </div>
        <div className="flex lg:flex-row flex-col">
          <img
            src={Amaze3}
            className="lg:mr-60 lg:ml-40 xl:ml-52 2xl:ml-72 lg:w-1/4 lg:h-1/4 w-1/2 mx-auto lg:mb-0 mb-8"
          />
          <img
            src={Partner}
            className="lg:mr-96 lg:w-1/4 lg:h-1/4 w-1/2 mx-auto mb-8"
          />
        </div>
        <img src={Amaze4} className="lg:w-1/4 lg:ml-96 w-1/2 mx-auto" />
      </div>

      <img
        src={Petik2}
        className="md:bg-cover md:w-1/12 absolute md:right-48 md:mt-96 w-20 mt-[400px] right-0"
      />
    </div>
  );
}

export default Testimonial;
