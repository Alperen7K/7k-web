import React from "react";
import { Title } from "./Title";
import { PersonelData } from "@/models/personel.data";

export const Education = () => {
 return (
  <div className="space-y-10  ">
   <Title title="Education" />
   <div className="w-full flex flex-col sm:flex-row sm:items-center justify-start  gap-x-1">
    <h2 className="text-[16px] opacity-80 text-nowrap">
     {PersonelData.universityYear}
    </h2>
    <h1 className="w-full  text-[20px]">{PersonelData.university}</h1>
   </div>
  </div>
 );
};
