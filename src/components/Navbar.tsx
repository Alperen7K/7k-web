"use client";
import Image from "next/image";
import { SideBar } from "./Sidebar";
import React, { useState } from "react";
import menu from "../../public/icons/menu.svg";
import { PersonelData } from "@/models/personel.data";
import { usePathname } from "next/navigation";

export default function Navbar() {
 const [open, setOpen] = useState(false);
 const pathname = usePathname();
 let labelClass = ` cursor-pointer text-[16px] pb-0.5 md:text-[20px] rounded-b-lg hover:border-b-[2px] text-white border-solid hover:border-white box-border duration-200  `;
 let activeClass = `cursor-pointer text-[16px] pb-0.5 md:text-[20px] rounded-b-lg border-b-[2px] text-white border-solid border-white box-border duration-200`;

 return (
  <div className="fixed top-0  py-1 z-[1000] right-0 left-0 navbar-font backdrop-blur-sm bg-black/50 text-white border-b-2 border-solid border-white/70 ">
   {/* Side Bar */}
   <SideBar open={open} close={() => setOpen(false)} />
   <div className="h-[60px] w-full   flex items-center justify-center">
    <div className="w-[95vw] sm:w-[85vw] mx-auto h-full  rounded-b-full    flex items-center justify-between">
     <a href="/">
      <label className="text-[35px] hover:scale-[1.03] font-bold duration-300 cursor-pointer">
       {PersonelData.icon}
      </label>
     </a>
     <div className="sm:block hidden space-x-6">
      <a
       href="/portfolio"
       className={pathname === "/portfolio" ? activeClass : labelClass}
      >
       Portfolio
      </a>
      <a
       href="/used-techs"
       className={pathname === "/used-techs" ? activeClass : labelClass}
      >
       Techs
      </a>
      <a href="/cv" className={pathname === "/cv" ? activeClass : labelClass}>
       CV
      </a>
     </div>
     <Image
      loading="lazy"
      src={menu}
      onClick={() => {
       setOpen(true);
      }}
      width={36}
      height={36}
      alt="menu icon"
      className="w-9 sm:hidden"
     />
    </div>
   </div>
  </div>
 );
}
