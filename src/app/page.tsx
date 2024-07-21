import { About } from "@/components/About";
import { Landing } from "@/components/Landing";
import { Education } from "@/components/Education";
import { ExperienceContainer } from "@/containers/ExperienceContainer";

export default function Home() {
 return (
  <>
   <Landing />
   <div className="mx-auto  w-[95vw] sm:w-[85vw]  space-y-16 pb-20">
    <About />
    <Education />
    <ExperienceContainer />
   </div>
  </>
 );
}
