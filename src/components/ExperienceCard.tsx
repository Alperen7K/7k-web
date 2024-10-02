import { ExperienceDataType } from "@/models/experience.data";
import React from "react";

export const ExperienceCard = ({ exp }: { exp: ExperienceDataType }) => {
 return (
  <div className="space-y-2  ">
   <h1 className="sm:text-[40px] text-[32px] font-bold m-0 p-0 ">
    &#8226; {exp.company}
   </h1>
   <h1 className="text-[20px] font-bold">{exp.jobTitle}</h1>
   <h2 className="opacity-50 text-[14px]">{exp.date}</h2>
   <h1 className="text-[18px] opacity-90">{exp.type}</h1>
   <p className="text-justify opacity-50">{exp.description}</p>
  </div>
 );
};
