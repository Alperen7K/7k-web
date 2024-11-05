import Image from "next/image";
import linkImage from "../../public/icons/link.svg";

export const LinkCard = ({ link }: { link: string }) => {
 return (
  <a href={link} target="_blank">
   <Image
    className="size-3.5 inline opacity-75 hover:opacity-100 duration-300"
    alt="Link Icon"
    src={linkImage}
   />
  </a>
 );
};
