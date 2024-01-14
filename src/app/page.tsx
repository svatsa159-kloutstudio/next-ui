"use client"
import Marquee from 'react-fast-marquee'
import React from "react";
import {getData} from "@/app/api/route";

export default function Home() {

    React.useEffect(() => {
        getData().then(console.log);
    },[]);
  return (
      <div className="flex flex-col w-[100vw] h-[100vh] bg-klout relative overflow-x-hidden">
        <div className="flex w-full h-full"></div>
        <div className="absolute select-none left-0 bottom-0 overflow-x-hidden whitespace-nowrap font-black text-klout-medium text-[90px] leading-[5rem] md:text-[140px] md:leading-[8rem] xl:text-[180px] xl:leading-[10rem]">
          <Marquee
              loop={0}
              autoFill
              className="overflow-y-hidden"
              gradient
              gradientColor="#4F000B"
          >
            Klout<span className="text-klout-light">Klout</span>
          </Marquee>
          <Marquee
              loop={0}
              autoFill
              className="overflow-y-hidden"
              gradient
              gradientColor="#4F000B"
              direction="right"
          >
            Studio.<span className="text-klout-light">Studio.</span>
          </Marquee>
        </div>
      </div>
  )
}
