import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "next";

function Prosjekter({ data }) {
  let Sdata = data
    .filter((data) => data.kategori == "Prosjekt")
    .sort((a, b) => (a.Sort > b.Sort ? 1 : -1));

  const [Rdata, setRData] = useState(Sdata);

  const filter = (put) => {
    const filteredData = data
      .filter((data) => data.kategori === put)
      .sort((a, b) => (a.Sort > b.Sort ? 1 : -1));
    setRData(filteredData);
  };

  return (
    <div>
      <div>
        <h1 className="pb-5 pt-10 underline underline-offset-8 text-white text-center text-4xl font-bold font-intra">
          Prosjekter
        </h1>

        <div className="space-x-3  text-center space-y-3">
          <button
            onClick={() => filter("Prosjekt")}
            className="bg-blue-600  text-white font-bold py-2 px-4 rounded"
          >
            Prosjekter
          </button>

          <button
            onClick={() => {
              filter("Erfaring");
            }}
            class="bg-blue-600  text-white font-bold py-2 px-4 rounded"
          >
            Erfaring
          </button>
          <button
            onClick={() => {
              filter("AE");
            }}
            class="bg-blue-600  text-white font-bold py-2 px-4 rounded"
          >
            Andre erfaringer
          </button>
          <button
            onClick={() => {
              filter("Utdanning");
            }}
            class="bg-blue-600  text-white font-bold py-2 px-4 rounded"
          >
            Utdanning
          </button>

          <button class="bg-blue-600  text-white font-bold py-2 px-4 rounded">
            3D
          </button>
        </div>

        <div className="p-5 container mx-auto grid  grid-cols-1  md:grid-cols-3 gap-5">
          {Rdata.map((t) => (
            <div className="   bg-gradient-to-r from-violet-800 to-fuchsia-800  rounded-md p-4">
              <div className="bg-[#14141f] rounded-md h-max -m-2 p-3">
                <div>
                  <h1 className="text-white text-3xl font-intra font-semibold pb-4">
                    {t.Tittel}
                  </h1>
                  <h1 className="text-white text-xl font-intra -mt-4 pb-4">
                    {t.Bedrift}
                  </h1>
                  <p className="text-white text-md font-intra -mt-4 pb-4">
                    {t.StartSlutt}
                  </p>

                  <h1 className="whitespace-pre-line	text-white font-intra text-xl pb-3">
                    {t.Beskrivelse && t.Beskrivelse.replaceAll("\\n", "\n\n")}
                  </h1>
                </div>
                <div className=" text-green-300 text-lg font-intra">
                  {t.prog && t.prog.map((g) => <h1 className="p-1">{g}</h1>)}
                </div>
                {t.Link && (
                  <div className="content-end">
                    <button
                      onClick={(e) => {
                        location.href = t.Link;
                      }}
                      className="mt-4 align-baseline bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Link
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Prosjekter;
