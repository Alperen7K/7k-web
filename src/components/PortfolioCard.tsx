"use client";
import React from "react";
import Image from "next/image";
import { LinkCard } from "./LinkCard";
import { useRouter } from "next/navigation";
import { TechnologyCard } from "./TechnologyCards";
import { PortfolioDataType } from "@/models/portfolio";

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
   className="cursor-pointer w-full 2xl:max-w-[1200px] xl:max-w-[900px] bg-white/5 border-2 border-solid border-white/40 shadow-lg shadow-white/10 rounded-2xl flex flex-col justify-between"
  >
   <div className="p-2 flex flex-col sm:flex-row gap-3 min-w-[200px] min-h-[100px]">
    <Image
     src={data.photos[0]}
     alt={data.name + "image"}
     width={200}
     loading="lazy"
     quality={70}
     height={100}
     className="w-full sm:w-[40%] aspect-[5/3] object-cover object-center rounded-lg "
    />
    <div className="w-full space-y-2 flex flex-col justify-between">
     <>
      <section className="  flex items-center justify-end gap-x-2 pr-1">
       {data.link && <LinkCard link={data.link} />}
       <h2 className="text-[14px] opacity-80 pt-0.5">{data.duty}</h2>
      </section>
      <h1 className="font-bold line-clamp-1 text-[20px]">{data.name}</h1>
     </>
     <p className="text-[16px] opacity-85 line-clamp-3">{data.detail}</p>
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
