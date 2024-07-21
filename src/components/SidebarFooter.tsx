import Image from "next/image";
import { SocialMedia } from "./SocialMedia";
import mail from "../../public/icons/mail.svg";
import phone from "../../public/icons/phone.svg";

export const SidebarFooter = () => {
 return (
  <div className="mx-auto w-full px-4 py-2 space-y-2 border-t-[1px] border-solid border-white/70 ">
   <SocialMedia />
   <div className="flex flex-col items-center gap-2">
    <a
     className="flex items-center gap-2 cursor-pointer text-[10px] font-bold text-white"
     href="tel:+90 546 434 60 08"
    >
     <Image
      src={phone}
      className={" w-[15px] "}
      width={15}
      height={15}
      loading="lazy"
      alt="Phone logo"
     />
     +90 546 434 60 08
    </a>
    <a
     className="flex items-center gap-2 cursor-pointer text-[10px] font-bold text-white"
     href="mailto:mehmetalperenyedik@gmail.com"
    >
     <Image
      src={mail}
      className={" w-[15px] "}
      alt="mail logo"
      width={15}
      loading="lazy"
      height={15}
     />
     mehmetalperenyedik@gmail.com
    </a>
   </div>
  </div>
 );
};
