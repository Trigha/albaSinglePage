import React from 'react';
import Hippo from '../assets/hippo.svg';
import HL from '../assets/HL.svg';
import Ilios from '../assets/ilios.svg';
import Dio from '../assets/dio.svg';
import Melandas from '../assets/melandas.svg';

function Partnership() {
  return (
    <div className="mt-24 ">
      <div className="grid grid-cols-5 md:mx-96">
        <img src={Hippo} />
        <img src={HL} />
        <img src={Ilios} />
        <img src={Dio} />
        <img src={Melandas} />
      </div>
      <div className="mx-auto">
        <div className="flex justify-center space-x-4">
          <div className="w-3 h-3 rounded-full bg-[#FFCE07]"></div>
          <div className="w-3 h-3 rounded-full bg-[#C4C4C4]"></div>
          <div className="w-3 h-3 rounded-full bg-[#C4C4C4]"></div>
        </div>
      </div>
    </div>
  );
}

export default Partnership;
