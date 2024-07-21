"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { PersonelData } from "@/models/personel.data";
import landing from "../../public/home-page/landing.webp";

export const Landing = () => {
 return (
  <div className="relative h-[100dvh] mb-10 pb-[10vh] sm:pb-0 sm:h-[100vh] w-full ">
   <Image
    src={landing}
    loading="lazy"
    alt="Landin img"
    width={1600}
    height={900}
    className=" size-full object-[25%_0%] sm:object-top object-cover absolute inset-0 "
    layout="right"
   />
   <div className="size-full inset-0 absolute landing-section flex flex-col justify-end pb-[40%] sm:pb-[15%] items-center z-50">
    <TypeAnimation
     sequence={[
      PersonelData.landing.firstLine,
      1000,
      PersonelData.landing.secondLine,
      1000,
      PersonelData.landing.thirdLine,
      1000,
      PersonelData.landing.fourthLine,
      1000,
     ]}
     wrapper="h1"
     speed={30}
     className="font-bold sm:text-[52px] text-[10vw] text-center drop-shadow max-w-[90vw] sm:max-w-[80vw] uppercase "
     repeat={Infinity}
    />
   </div>
  </div>
 );
};
