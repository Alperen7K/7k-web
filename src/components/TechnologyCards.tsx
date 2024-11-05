export const TechnologyCard = ({ tech }: { tech: string }) => {
 return (
  <span className="px-1 py-0.75 rounded-md text-[12px] bg-white/10 border-[1px] border-solid border-white/20 ">
   {tech}
  </span>
 );
};
