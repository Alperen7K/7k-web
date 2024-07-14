export const TechnologyCard = ({
 tech,
 key,
}: {
 tech: string;
 key: number;
}) => {
 return (
  <span key={key} className="px-1 py-0.75 rounded-md text-[12px] bg-black ">
   {tech}
  </span>
 );
};
