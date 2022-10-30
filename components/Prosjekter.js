import React, { useState } from "react";
import Link from "next/link";
import Button from "next";

function Prosjekter({ data }) {
  console.log(data);

  const [active, setActive] = React.useState(0);

  console.log(active);
  return (
    <div>
      <div>
        <h1 className="pb-5 pt-10 underline underline-offset-8 text-white text-center text-4xl font-bold font-intra">
          Prosjekter
        </h1>

        {/*
        <div className="space-x-4 justify-center text-center">
          <button
            onClick={() => setActive(1)}
            className="bg-blue-500  text-white font-bold py-2 px-4 rounded"
          >
            Prosjekter
          </button>

          <button class="bg-blue-500  text-white font-bold py-2 px-4 rounded">
            Media
          </button>
          <button class="bg-blue-500  text-white font-bold py-2 px-4 rounded">
            Utdanning
          </button>
          <button class="bg-blue-500  text-white font-bold py-2 px-4 rounded">
            3D
          </button>
        </div>
        */}

        <div className="p-5 container mx-auto grid grid-cols-1 md:grid-cols-4 gap-5">
          {data.map((t) => (
            <div key={t.Tittel} className="bg-[#283141]  rounded-md p-4">
              <div>
                <h1 className="text-white text-3xl font-intra font-semibold pb-4">
                  {t.Tittel}
                </h1>

                <h1 className="text-white font-intra text-xl pb-3">
                  {t.Beskrivelse}
                </h1>
              </div>
              <div className=" text-green-300 text-lg font-intra">
                {t.prog.map((g) => (
                  <h1 className="p-1">{g}</h1>
                ))}
              </div>
              <div className="content-end">
                <button
                  onClick={(e) => {
                    location.href = t.Link;
                  }}
                  className="mt-4 align-baseline bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Link
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Prosjekter;
