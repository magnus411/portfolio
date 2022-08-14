import React from "react";
import Image from "next/image";

function Body() {
  return (
    <div className="md:p-20">
      <div className="grid grid-cols-1 md:grid-cols-8">
        <div className="md:col-span-5 p-5 md:p-28">
          <h1 className=" text-2xl md:text-4xl font-inter font-semibold  text-white pb-4 ">
            -Hello World!
          </h1>
          <h1 className=" text-5xl md:text-7xl font-inter font-bold -mb-3 text-white">
            I'M Magnus Gjerstad
          </h1>
          <div className="">
            <h1 className="text-3xl md:text-5xl font-inter font-semibold pt-10 md:pt-5 text-white">
              En ung utvikler,
            </h1>
            <h1 className="text-lg md:text-3xl font-inter font-semibold md:pt-2 text-white">
              som for tiden studerer dataingeiør ved
            </h1>
            <h1 className="text-xl md:text-3xl font-inter font-semibold text-white">
              NTNU
            </h1>
          </div>
          <button
            className="mt-3  bg-transparent hover:bg-green-600 text-green-600 font-semibold hover:text-white text-lg py-2 px-10 border border-green-500 hover:border-transparent rounded"
            type="button"
          >
            Hire Me!
          </button>
        </div>

        <div className=" h-[600px] pl-10 md:p-0">
          <div className=" w-10/12 md:h-5/6 h-5/6 md:w-96 relative ">
            <Image
              layout="fill"
              objectFit="cover"
              src="https://i.imgur.com/ob1vubg.png"
            ></Image>
            <div className=" md:m-5 m-5 bg-white w-full md:w-full h-[525px] md:h-[520px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
