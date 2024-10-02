import React from "react";
import { Title } from "./Title";
import { PersonelData } from "@/models/personel.data";

export const About = () => {
 return (
  <div className="space-y-10  ">
   <Title position="left" title="About" />
   <div className=" space-y-4 text-justify *:text-[18px] *:opacity-80">
    <p className="">{PersonelData.firstDescription}</p>
    <p className="text-[18px] text-justify opacity-80">
     {PersonelData.secondDescription}
    </p>
   </div>
  </div>
 );
};
