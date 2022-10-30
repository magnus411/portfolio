import React from "react";
import { SiLinkedin } from "react-icons/si";
import { GoMarkGithub } from "react-icons/go";
import { AiTwotoneMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function ContactMe() {
  return (
    <div>
      <div className="-mt-10 grid grid-cols-1 md:grid-cols-8 p-10">
        <div></div>
        <div></div>

        <div className="col-span-4">
          <h1 className="underline underline-offset-8 text-white text-center text-4xl font-bold font-intra">
            Kontakt meg
          </h1>

          <p className="mt-5 text-white text-center container mx-auto text-xl text-center  ">
            Har du noen spørsmål, eller ønsker du å ta en prat, kan du kontakte
            meg her:
          </p>

          <div className="bg-[#283141] mt-5 flex gap-3 justify-center pt-3 h-20 mx-auto w-1/3 rounded-md ">
            <a href="https://no.linkedin.com/in/magnus-gjerstad-85b184177">
              <SiLinkedin className="text-white text-5xl" />
            </a>
            <a href="mailto:magnusgjerstad00@gmail.com">
              <AiTwotoneMail className="text-white  text-5xl" />
            </a>
            <a href="tlf:+4748218789">
              <BsFillTelephoneFill className="text-white  text-5xl" />
            </a>
            <a href="">
              <GoMarkGithub className="text-white  text-5xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
