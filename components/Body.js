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
              som for tiden studerer dataingeniør ved
            </h1>
            <h1 className="text-xl md:text-3xl font-inter font-semibold text-white">
              NTNU
            </h1>
          </div>
          <div className="flex">
            <a href="/gjerstad.vcf">
              <button
                className="mt-3  bg-transparent hover:bg-green-600 text-green-600 font-semibold hover:text-white text-lg py-2 px-10 border border-green-500 hover:border-transparent rounded"
                type="button"
              >
                Hire Me!
              </button>
            </a>
          </div>
          <h1 className="text-xl md:text-xl text-white ml-3 mt-4">
            {" "}
            - Siden er under utvikling
          </h1>
        </div>

        <div className=" h-[600px] pl-10 md:p-0">
          <div className=" w-10/12 md:h-5/6 h-5/6 md:w-96 relative ">
            <Image
              className="z-40"
              layout="fill"
              objectFit="cover"
              src="https://i.imgur.com/ew51bpc.jpg"
              priority
              alt="Portrett av Magnus Gjerstad"
            ></Image>
            <div className=" bg-white w-full z-0 relative top-10 md:top-10 right-0	  h-[490px] md:h-[490px] ml-8 p"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
