import React from 'react';

function Notice() {
  return (
    <div className="mt-20">
      <div className="bg-[#FFCE07] xl:w-[1105px] md:h-[222.85px] md:w-1/2 w-full h-auto mx-auto rounded-2xl">
        <div className="flex justify-center flex-col text-center">
          <h1 className="font-semibold text-lg mt-10">
            Is software important for your business?
          </h1>
          <h1 className="font-semibold text-4xl mt-3">
            Build it with Albatech
          </h1>
          <a
            href="#"
            class="mt-6 mx-auto mb-5 bg-[#FFCE07] text-sm font-bold hover:bg-yellow-300 text-black hover:text-black rounded-[30px] shadow hover:shadow-lg py-4 px-10 border border-black hover:border-yellow-300"
          >
            Consultation Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Notice;
