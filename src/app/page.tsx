"use client";
import { Title } from "@/components/Title";
import { ExperienceData } from "@/models/experience.data";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
 const historyJobTitle = "w-full  text-[20px]  ";

 return (
  <>
   <div className="h-[100dvh] pb-[10vh] sm:pb-0 sm:h-[100vh] w-full flex flex-col justify-center items-center">
    <TypeAnimation
     sequence={[
      "Hey! My name is",
      1000,
      "Mehmet Alperen YEDİK",
      1000,
      "and I am a web developer",
      1000,
      "if you want to know more, scroll down.",
      1000,
     ]}
     wrapper="h1"
     speed={30}
     className="font-bold sm:text-[52px] text-[10vw] text-center drop-shadow max-w-[90vw] sm:max-w-[80vw] uppercase"
     repeat={Infinity}
    />
   </div>
   <div className="mx-auto  w-[95vw] sm:w-[85vw]  space-y-16 pb-20">
    <div className="space-y-10  ">
     <Title title="About" />
     <div className=" space-y-4 *:text-[18px] *:opacity-80">
      <p className="">
       Hello my name is <span className="font-bold">Mehmet Alperen YEDİK</span>.
       I was born in Konya, and I decided to stay in my hometown for my
       university education. My hunger for learning constantly motivates me to
       improve.
      </p>
      <p className="text-[18px] opacity-80">
       I began my journey of learning software through voluntary work at the
       Kapsül Technology Platform. With diligence over time, I secured my first
       job in my software career. Currently, I am actively engaged in my current
       job, and alongside that, I continue to enhance my skills through
       voluntary internship at Aivisiontech. Additionally, I am involved in
       freelance projects to further diversify my experiences.
      </p>
     </div>
    </div>
    <div className="space-y-10  ">
     <Title title="Education" />
     <div className="w-full flex items-center justify-start gap-x-4">
      <h2 className="text-[16px] opacity-80 text-nowrap">2022 / 2026 </h2> -
      <h1 className={historyJobTitle}>
       Selcuk University Mechatronic Engineering
      </h1>
     </div>
    </div>
    <div className="space-y-10">
     <Title title="Experience" />
     <div className="space-y-14">
      {ExperienceData.map(
       (
        exp: {
         date: string;
         type: string;
         jobTitle: string;
         description: string;
         company: string;
        },
        index: number
       ) => {
        return (
         <div key={index} className="space-y-4  ">
          <h1 className=" text-[35px] sm:text-[40px] font-bold  ">
           {exp.type}
          </h1>
          <h1 className="opacity-80 text-[16px] ">{exp.date}</h1>
          <div className=" flex flex-col sm:flex-row sm:items-center gap-x-4 *:sm:text-nowrap">
           <h1 className=" text-[24px] font-semibold ">{exp.jobTitle}</h1>
           <span className="hidden sm:block">-</span>
           <h1 className="w-full  text-[20px]">{exp.company}</h1>
          </div>
          <p className="text-[18px] text-justify">{exp.description}</p>
         </div>
        );
       }
      )}
     </div>
    </div>
   </div>
  </>
 );
}


