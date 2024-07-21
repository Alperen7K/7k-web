import Image from "next/image";
import { SocialMedia } from "./SocialMedia";
import mail from "../../public/icons/mail.svg";
import phone from "../../public/icons/phone.svg";
import { PersonelData } from "@/models/personel.data";

export const SidebarFooter = () => {
 return (
  <div className="mx-auto w-full px-4 py-2 space-y-2 border-t-[1px] border-solid border-white/70 ">
   <SocialMedia />
   <div className="flex flex-col items-center gap-2">
    <a
     className="flex items-center gap-2 cursor-pointer text-[10px] font-bold text-white"
     href={`tel:${PersonelData.phone}`}
    >
     <Image
      src={phone}
      className={" w-[15px] "}
      width={15}
      height={15}
      loading="lazy"
      alt="Phone logo"
     />
     {PersonelData.phone}
    </a>
    <a
     className="flex items-center gap-2 cursor-pointer text-[10px] font-bold text-white"
     href={`mailto:${PersonelData.mail}`}
    >
     <Image
      src={mail}
      className={" w-[15px] "}
      alt="mail logo"
      width={15}
      loading="lazy"
      height={15}
     />
     {PersonelData.mail}
    </a>
   </div>
  </div>
 );
};
