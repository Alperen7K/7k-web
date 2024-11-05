import Image from "next/image";
import linkImage from "../../public/icons/link.svg";

export const TechnologyCard = ({ tech }: { tech: string }) => {
 return (
  <span className="px-1 py-0.75 rounded-md text-[12px] bg-white/10 border-[1px] border-solid border-white/20 ">
   {tech}
  </span>
 );
};

export const LinkCard = ({ link }: { link: string }) => {
 return (
  <a
   href={link}
   //    className="px-1 py-0.75 rounded-md text-[12px] bg-white/10 border-[1px] border-solid border-white/20 "
  >
   <Image
    className="size-3.5 inline opacity-75 hover:opacity-100 duration-300"
    alt="Link Icon"
    src={linkImage}
   />
  </a>
 );
};
