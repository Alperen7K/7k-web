import React from "react";
import Image from "next/image";
import home from "../../public/icons/home.svg";

export default function NotFound() {
 return (
  <div className="bg-black flex flex-col items-center justify-center gap-y-[30vh] pb-[10vh] sm:pb-0 text-white w-full h-screen">
   <div>
    <h1 className="text-[100px] font-bold  text-center">404</h1>
    <h1 className="text-[40px] font-bold  text-center">Page Not Found</h1>
   </div>

   <a href="/" rel="Home Link" className=" ">
    <Image
     loading="lazy"
     src={home}
     alt="Home icon"
     className="size-20"
     width={40}
     height={40}
    />
   </a>
  </div>
 );
}
