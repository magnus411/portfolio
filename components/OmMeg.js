import React from "react";

function OmMeg() {
  return (
    <div>
      <div className="-mt-10 grid grid-cols-1 md:grid-cols-8 p-10">
        <div></div>
        <div></div>

        <div className="col-span-4">
          <h1 className="underline underline-offset-8 text-white text-center text-4xl font-bold font-intra">
            Litt om meg
          </h1>
          <p className="mt-10 text-white container mx-auto text-xl text-center  ">
            22 år gammel entusiastisk-alt mulig-mann som står hardt på for å nå
            sine mål. Teknologi interessert, god ledererfaring, er
            løsningsorientert, blid og omgjengelig.
          </p>

          <p className="mt-10 text-white text-center container mx-auto text-xl  ">
            Min største egenskap er passion og evne til å lære meg nye
            ferdigheter.
          </p>

          <p className="mt-10 text-white container text-center mx-auto text-xl ">
            Jeg har stor bredde i min kompetanse da jeg har erfaring innenfor
            ledelse, salg, programmering, IT, film, foto, grafisk, web, 3D og
            markedsføringsstrategier.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OmMeg;
