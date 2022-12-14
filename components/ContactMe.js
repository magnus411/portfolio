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
          <a href="/gjerstad.vcf">
            <h1 className="underline underline-offset-8 text-white text-center text-4xl font-bold font-intra">
              Kontakt meg
            </h1>
          </a>

          <p className="mt-5 text-white text-center container mx-auto text-xl text-center  ">
            Har du noen spørsmål, eller ønsker du å ta en prat, kan du kontakte
            meg her:
          </p>
          <div className="bg-gradient-to-r from-violet-900 to-fuchsia-500 rounded-md">
            <div className="bg-[#181826]/20 m mt-5 flex gap-3 justify-center pt-4 h-20 mx-auto   rounded-md  ">
              <a href="https://no.linkedin.com/in/magnus-gjerstad-85b184177">
                <SiLinkedin
                  aria-label="Kontakt meg på Linkedin"
                  className="text-white text-5xl"
                />
              </a>
              <a href="mailto:magnusgjerstad00@gmail.com">
                <AiTwotoneMail
                  aria-label="Kontakt meg via Email"
                  className="text-white  text-5xl"
                />
              </a>
              <a href="/gjerstad.vcf">
                <BsFillTelephoneFill
                  aria-label="Kontakt meg via tlf"
                  className="text-white  text-5xl"
                />
              </a>
              <a href="https://github.com/magnus411">
                <GoMarkGithub
                  aria-label="Finn prosjektene mine på GitHub"
                  className="text-white  text-5xl"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
