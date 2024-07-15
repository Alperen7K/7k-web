"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TechnologyCard } from "./TechnologyCards";
import { PortfolioDataType } from "@/models/portfolio/portfolio.data";

export default function PortfolioCard({
 data,
 key,
}: {
 data: PortfolioDataType;
 key: number;
}) {
 const navigate = useRouter();
 return (
  <div
   onClick={() => {
    navigate.push("/portfolio/" + data.path);
   }}
   key={key}
   className="cursor-pointer w-full max-w-[900px] bg-white/5 border-2 border-solid border-white/40 shadow-lg shadow-white/10 rounded-lg flex flex-col justify-between"
  >
   <div className="px-2 pt-2 pb-1.5 flex flex-col sm:flex-row gap-3">
    <Image
     src={data.photos[0]}
     alt={data.name + "image"}
     width={200}
     height={100}
     className="w-full sm:w-[30%] aspect-[5.5/3] object-contain rounded-md"
    />
    <div className="w-full space-y-2 ">
     <h2 className="text-end text-[14px] opacity-80">{data.duty}</h2>
     <h1 className="font-bold line-clamp-1 text-[20px]">{data.name}</h1>
     <p className="text-[16px] opacity-85 line-clamp-4">{data.detail}</p>
     <div className="hidden md:flex justify-end flex-nowrap overflow-x-hidden gap-x-1 ">
      {data.techs.map((tech: string, index: number) => {
       return <TechnologyCard key={index} tech={tech} />;
      })}
     </div>
    </div>
   </div>
  </div>
 );
}
