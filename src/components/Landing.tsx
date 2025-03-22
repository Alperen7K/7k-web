"use client";
import React from "react";
import "../app/globals.css";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { PersonelData } from "@/models/personel.data";
import landing from "../../public/home-page/cv-img.png";

export const Landing = () => {
 return (
  <div className="relative min-h-[100dvh] w-full flex flex-col sm:flex-row-reverse items-center justify-around py-10">
   {/* Mobilde üstte, masaüstünde sağda olacak resim */}
   <div className="w-full h-[50vh] sm:h-full flex justify-center  items-center  absolute sm:relative top-[12vh] sm:top-0 ">
    <div className="size-full img-section z-10 absolute inset-0" />
    <Image
     src={landing}
     loading="lazy"
     alt="Landing img"
     width={900}
     height={900}
     className="object-cover  size-[300px]  sm:size-[45vh] md:size-[50vh] lg:size-[55vh] xl:size-[60vh] aspect-square rounded-full filter  transition-all duration-300"
    />
   </div>

   {/* Mobilde altta, masaüstünde solda olacak yazı */}
   <div className="w-full mt-[50vh] flex flex-col justify-start sm:justify-center items-center sm:mt-0 px-4 sm:px-10">
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
     className="font-semibold sm:text-[52px] text-[8vw] text-center  drop-shadow max-w-[90vw] sm:max-w-[100%] "
     repeat={Infinity}
    />
   </div>
  </div>
 );
};
