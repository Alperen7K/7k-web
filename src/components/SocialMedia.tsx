import React from "react";
import Image from "next/image";
import github from "../../public/icons/github.svg";
import { PersonelData } from "@/models/personel.data";
import linkedin from "../../public/icons/linkedin.svg";
import instagram from "../../public/icons/instagram.svg";

export const SocialMedia = () => {
 const iconClass =
  "w-6 shadow rounded-lg  hover:bg-antrasit duration-300 hover:scale-[1.04] ";

 return (
  <div className="w-full justify-center flex gap-x-3">
   <a href={PersonelData.instagram} target="_blank">
    <Image
     src={instagram}
     className={iconClass}
     alt="instagram logo"
     width={40}
     height={40}
     loading="lazy"
    />
   </a>
   <a href={PersonelData.github} target="_blank">
    <Image
     src={github}
     className={iconClass}
     width={40}
     height={40}
     loading="lazy"
     alt="github logo"
    />
   </a>
   <a href={PersonelData.linkedin} target="_blank">
    <Image
     src={linkedin}
     className={iconClass}
     width={40}
     loading="lazy"
     height={40}
     alt="linkedin logo"
    />
   </a>
  </div>
 );
};
