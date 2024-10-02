import React from "react";
import { Title } from "@/components/Title";
import { ExperienceData, ExperienceDataType } from "@/models/experience.data";

export const ExperienceContainer = () => {
 return (
  <div className="space-y-10">
   <Title title="Experience" />
   <div className="space-y-10">
    {ExperienceData.map((exp: ExperienceDataType, index: number) => {
     return (
      <div key={index} className="space-y-4  ">
       <h1 className=" text-[35px] sm:text-[40px] font-bold  ">{exp.type}</h1>
       <h1 className="opacity-80 text-[16px] ">{exp.date}</h1>
       <div className=" flex flex-col sm:flex-row sm:items-center gap-x-4 text-nowrap">
        <h1 className="w-full  text-[20px]">{exp.company}</h1>
        <span className="hidden sm:block px-4"> - </span>
        <h1 className=" text-[24px] font-semibold ">{exp.jobTitle}</h1>
       </div>
       <p className="text-[16px] text-justify opacity-90">{exp.description}</p>
      </div>
     );
    })}
   </div>
  </div>
 );
};
