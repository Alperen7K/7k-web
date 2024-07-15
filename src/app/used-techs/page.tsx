import React from "react";
import { Title } from "@/components/Title";
import { UsedTechsCard } from "@/components/UsedTechsCard";
import { UsedTechsData, UsedTechsDataType } from "@/models/used.tech.data";

export default function UsedTechs() {
 return (
  <div className="mx-auto  w-[95vw] sm:w-[85vw]  space-y-12  pt-28 pb-10">
   <Title title="Used Technologies" />
   <div className="w-full grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 place-items-center gap-2 sm:gap-6 ">
    {UsedTechsData.map((tech: UsedTechsDataType, index: number) => {
     return (
      <UsedTechsCard
       key={index}
       img={tech.img}
       name={tech.name}
       link={tech.link}
      />
     );
    })}
   </div>
  </div>
 );
}
