"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import mail from "../../public/icons/mail.svg";
import phone from "../../public/icons/phone.svg";
import github from "../../public/icons/github.svg";
import linkedin from "../../public/icons/linkedin.svg";
import instagram from "../../public/icons/instagram.svg";

export default function Footer() {
 const navigate = useRouter();
 const iconClass =
  "w-6 shadow rounded-lg  hover:bg-antrasit duration-300 hover:scale-[1.04] ";

 return (
  <>
   <div className="w-full bg-black text-white flex items-center justify-center border-solid border-t-2 border-white">
    <div className="w-[95vw] sm:w-[85vw] mx-auto flex flex-col sm:flex-row sm:justify-between items-center gap-y-1 sm:gap-y-4 py-3">
     <div className="flex flex-col items-center gap-y-2 sm:gap-y-0">
      <div
       onClick={() => {
        navigate.push("/");
       }}
       className="text-[35px] hover:scale-[1.03] font-bold duration-300 cursor-pointer"
      >
       {"7K's"}
      </div>
      <div className="w-full justify-center flex gap-2 ">
       <a href="https://www.instagram.com/alperenyedik/" target="_blank">
        <Image
         src={instagram}
         width={20}
         height={20}
         className={iconClass}
         loading="lazy"
         alt="instagram logo"
        />
       </a>
       <a href="https://github.com/Alperen7K" target="_blank">
        <Image
         src={github}
         width={20}
         loading="lazy"
         height={20}
         className={iconClass}
         alt="github logo"
        />
       </a>
       <a href="https://www.linkedin.com/in/alperen7k/" target="_blank">
        <Image
         src={linkedin}
         width={20}
         height={20}
         loading="lazy"
         className={iconClass}
         alt="linkedin logo"
        />
       </a>
      </div>
     </div>

     <div className="flex flex-col items-center sm:items-start  gap-2 mt-4">
      <a
       className="flex items-center gap-2 cursor-pointer text-[15px] font-bold text-white"
       href="tel:+90 546 434 60 08"
      >
       <Image
        src={phone}
        loading="lazy"
        width={32}
        height={32}
        className={" w-[20px] "}
        alt="phone logo"
       />
       +90 546 434 60 08
      </a>
      <a
       className="flex items-center gap-2 cursor-pointer text-[15px] font-bold text-white"
       href="mailto:mehmetalperenyedik@gmail.com"
      >
       <Image
        src={mail}
        width={32}
        loading="lazy"
        height={32}
        className={" w-[20px] "}
        alt="mail logo"
       />
       mehmetalperenyedik@gmail.com
      </a>
     </div>
    </div>
   </div>
   <div className="border-t-[1px] bg-black text-white/70 text-center border-solid border-white/20 py-2 text-[12px]">
    Powered By{"  "}
    <a
     href="https://alperen7k.com.tr"
     target="_blank"
     rel="noreferrer"
     className="font-bold text-white pl-1"
    >
     {"7K's"}
    </a>
   </div>
  </>
 );
}
