"use client";
import { Title } from "@/components/Title";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { TechnologyCard } from "@/components/TechnologyCards";
import {
 PortfolioData,
 PortfolioDataType,
} from "@/models/portfolio/portfolio.data";
import Image, { StaticImageData } from "next/image";

export default function PortfolioInfo() {
 const params = useParams<{ name: string }>();
 const [portfolioInfo, setPortfolioInfo] = useState<PortfolioDataType>();

 useEffect(() => {
  const data = PortfolioData.filter(
   (portfolio: PortfolioDataType) => portfolio.path === params.name
  );
  setPortfolioInfo(data[0]);
 }, []);

 return (
  <div className="mx-auto  w-[95vw] sm:w-[85vw]  space-y-8 sm:space-y-10  pt-28 pb-20">
   <Title title={portfolioInfo?.name || ""} />
   <div className="space-y-6">
    <div className="flex  flex-wrap justify-center scale-110 gap-2">
     {portfolioInfo?.techs.map((tech: string, index: number) => {
      return <TechnologyCard key={index} tech={tech} />;
     })}
    </div>
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
     {portfolioInfo?.photos.map((photo: StaticImageData, index: number) => {
      return (
       <Image
        loading="lazy"
        key={index}
        src={photo}
        width={400}
        height={300}
        alt={portfolioInfo.name}
        className="w-full aspect-[16/9] object-contain rounded-lg border-[1px] border-solid border-white/20"
       />
      );
     })}
    </div>
    <p className="text-justify opacity-80">{portfolioInfo?.detail}</p>
   </div>
  </div>
 );
}
