import React from 'react';

function Info() {
  return (
    <div className="flex flex-col justify-center bg-[#272727] w-full mt-14">
      <div className="flex justify-center flex-col ">
        <h1 className="text-[#FFCE07] md:text-2xl text-xl font-bold text-center mt-7">
          Our Progress Comes with a Collaboration Between
        </h1>
        <h1 className="text-[#FFCE07] md:text-2xl text-xl font-bold text-center mt-3">
          Creativity, Ideas, and Technology
        </h1>
      </div>
      <div className="flex justify-evenly flex-row mt-5 mb-7">
        <div className="flex flex-col">
          <h1 className="text-white md:text-3xl text-lg text-center font-bold mb-3">
            1000+
          </h1>
          <p className="text-md text-white text-center font-medium">Designs</p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white md:text-3xl text-center text-lg font-bold mb-3">
            30+
          </h1>
          <p className="text-md text-white text-center font-medium">Product</p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white md:text-3xl text-center text-lg font-bold mb-3">
            58+
          </h1>
          <p className="text-md text-white text-center font-medium">
            Website Developments
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
