import { PortfolioDataType } from "@/models/portfolio.data";
import Image from "next/image";
import React from "react";
import { TechnologyCard } from "./TechnologyCards";

export default function PortfolioCard({ data }: { data: PortfolioDataType }) {
 return (
  <div className=" w-full max-w-[900px] bg-white/20 border-2 border-solid border-white/15 shadow-lg shadow-white/10 rounded-lg flex flex-col justify-between">
   <div className="px-2 pt-2 pb-1.5 flex flex-col sm:flex-row gap-x-3">
    <Image
     src={data.photos[0]}
     alt={data.name + "image"}
     width={200}
     height={100}
     className="w-full sm:w-[30%] aspect-[5.5/3] object-cover rounded-md"
    />
    <div className="w-full space-y-2 ">
     <h2 className="text-end text-[14px] opacity-80">{data.duty}</h2>
     <h1 className="font-bold line-clamp-1 text-[20px]">{data.name}</h1>
     <p className="text-[16px] opacity-85 line-clamp-4">{data.detail}</p>
     <div className="flex justify-end flex-nowrap overflow-x-scroll gap-x-1 ">
      {data.techs.map((tech: string, index: number) => {
       return <TechnologyCard key={index} tech={tech} />;
      })}
     </div>
    </div>
   </div>
  </div>
 );
}

