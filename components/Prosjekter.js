import React from "react";
import Link from "next/link";

function Prosjekter({ data }) {
  console.log(data);
  return (
    <div>
      <div>
        <h1 className="pb-10 underline underline-offset-8 text-white text-center text-4xl font-bold font-intra">
          Prosjekter
        </h1>
        <div className="p-5 container mx-auto grid grid-cols-1 md:grid-cols-4 gap-5">
          {data.map((t) => (
            <div key={t.Tittel} className="bg-[#5E5E72] rounded-md p-4">
              <h1 className="text-white text-3xl font-intra font-semibold pb-4">
                {t.Tittel}
              </h1>

              <h1 className="text-white font-intra text-xl pb-3">
                {t.Beskrivelse}
              </h1>

              <h1 className=" flex text-green-300 text-lg font-intra">
                {t.prog.map((g) => (
                  <h1 className="p-1">{g}</h1>
                ))}
              </h1>

              <button
                onClick={(e) => {
                  location.href = t.Link;
                }}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Link
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Prosjekter;
