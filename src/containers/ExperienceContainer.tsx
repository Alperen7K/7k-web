import React from "react";
import { Title } from "@/components/Title";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ExperienceData, ExperienceDataType } from "@/models/experience.data";

export const ExperienceContainer = () => {
 return (
  <div className="space-y-10">
   <Title position="left" title="Experience" />
   <div className="space-y-10">
    {ExperienceData.map((exp: ExperienceDataType, index: number) => {
     return <ExperienceCard key={index} exp={exp} />;
    })}
   </div>
  </div>
 );
};
