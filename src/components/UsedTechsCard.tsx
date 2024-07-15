import Image from "next/image";
import { UsedTechsDataType } from "@/models/used.tech.data";

export const UsedTechsCard = ({ img, name, link }: UsedTechsDataType) => {
 return (
  <a
   href={link}
   target="_blank"
   rel="noreferrer"
   className="group [perspective:1000px] w-full aspect-square"
  >
   <div className="w-full h-full aspect-square relative rounded-xl transition-all duration-[1000ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">
    <div className="aspect-square absolute inset-0 w-full h-full p-4 md:p-8 shadow-[0_35px_60px_-15px_rgba(255,255,255,0.1)] border-2 borer-solid border-white/10 rounded-xl">
     <Image
      src={img}
      alt="Tech icon"
      width={200}
      height={200}
      className="w-[100%] aspect-square group-hover:[transform:transformZ(1000)] "
     />
    </div>
    <div className=" p-4 sm:p-8  w-full aspect-square absolute inset-0 bg-black/85 border-2 border-white/30 border-solid rounded-xl flex items-center justify-center -scale-x-100 [transform:rotateY(180deg)] [backface-visibility:hidden]">
     <h1 className="text-[16px] sm:text-[20px] font-bold text-center">
      {name}
     </h1>
    </div>
   </div>
  </a>
 );
};
