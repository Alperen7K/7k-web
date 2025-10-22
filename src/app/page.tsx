import { About } from "@/components/About";
import { Landing } from "@/components/Landing";
import { Education } from "@/components/Education";
import { ExperienceContainer } from "@/containers/ExperienceContainer";

export default function Home() {
 return (
   <main className="min-h-screen bg-gradient-to-br from-black via-black to-gray-900/30">
     {/* Hero Section */}
     <Landing />

     {/* Content Sections */}
     <div className="space-y-0">
       <About />
       <Education />
       <ExperienceContainer />
     </div>

     {/* Footer Spacing */}
     <div className="h-20" />
   </main>
 );
}
