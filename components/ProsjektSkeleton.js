import React from "react";

function ProsjektSkeleton() {
  return (
    <div>
      <div>
        <h1 className="pb-5 pt-10 underline underline-offset-8 text-white text-center text-4xl font-bold font-intra">
          Prosjekter
        </h1>

        <div className="space-x-3  text-center space-y-3">
          <button className="bg-blue-600  text-white font-bold py-2 px-4 rounded">
            Prosjekter
          </button>

          <button className="bg-blue-600  text-white font-bold py-2 px-4 rounded">
            Erfaring
          </button>
          <button className="bg-blue-600  text-white font-bold py-2 px-4 rounded">
            Andre erfaringer
          </button>
          <button className="bg-blue-600  text-white font-bold py-2 px-4 rounded">
            Utdanning
          </button>

          <button className="bg-blue-600  text-white font-bold py-2 px-4 rounded">
            3D
          </button>
        </div>

        <div className="p-5 container mx-auto grid  grid-cols-1  md:grid-cols-3 gap-5">
          <div className="   bg-gradient-to-r from-violet-800 to-fuchsia-800  rounded-md p-4">
            <div className="bg-[#14141f] rounded-md h-max -m-2 p-3 h-[200px]"></div>
          </div>
          <div className="   bg-gradient-to-r from-violet-800 to-fuchsia-800  rounded-md p-4">
            <div className="bg-[#14141f] rounded-md h-max -m-2 p-3 h-[200px]"></div>
          </div>
          <div className="   bg-gradient-to-r from-violet-800 to-fuchsia-800  rounded-md p-4">
            <div className="bg-[#14141f] rounded-md h-max -m-2 p-3 h-[200px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProsjektSkeleton;
