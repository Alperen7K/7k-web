import React from "react";
import Image from "next/image";
import github from "../../public/icons/github.svg";
import linkedin from "../../public/icons/linkedin.svg";
import instagram from "../../public/icons/instagram.svg";

export const SocialMedia = () => {
 const iconClass =
  "w-6 shadow rounded-lg  hover:bg-antrasit duration-300 hover:scale-[1.04] ";

 return (
  <div className="w-full justify-center flex gap-x-3">
   <a href="https://www.instagram.com/alperenyedik/" target="_blank">
    <Image
     src={instagram}
     className={iconClass}
     alt="instagram logo"
     width={40}
     height={40}
     loading="lazy"
    />
   </a>
   <a href="https://github.com/Alperen7K" target="_blank">
    <Image
     src={github}
     className={iconClass}
     width={40}
     height={40}
     loading="lazy"
     alt="github logo"
    />
   </a>
   <a href="https://www.linkedin.com/in/alperen7k/" target="_blank">
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
