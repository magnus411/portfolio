import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Body from "../components/Body";
import OmMeg from "../components/OmMeg";
import Prosjekter from "../components/Prosjekter";
/*className="flex min-h-screen flex-col items-center justify-center py-2" */

import React, { useState, useEffect, useRef } from "react";
import useSWR from "swr";

const Home: NextPage = () => {
  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json());

  const { data, error } = useSWR("/api/prosjekt", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data)
    return (
      <div>
        <Head>
          <title>Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className="bg-[#181826]  ">
          <Body />
          <OmMeg />
        </main>

        <footer className="flex h-24 w-full items-center justify-center border-t">
          <a
            className="flex items-center justify-center gap-2"
            href="https://github.com/magnus411"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Gjerstad
          </a>
          s
        </footer>
      </div>
    );

  console.log("console gang her");
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="bg-[#181826]  ">
        <Body />
        <OmMeg />
        <Prosjekter data={data} />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://github.com/magnus411"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Gjerstad
        </a>
        s
      </footer>
    </div>
  );
};

export default Home;
