import Image from "next/image";
import { useRouter } from "next/navigation";
import closeIcon from "../../public/icons/close.svg";
import { PersonelData } from "@/models/personel.data";

export const SidebarHeader = ({ close }: { close: () => void }) => {
 const navigator = useRouter();

 return (
  <div className="w-full flex items-center text-white justify-between px-4 py-2 border-b-[1px] border-solid border-white/70">
   <h1
    onClick={() => {
     close();
     navigator.push("/");
    }}
    className="text-[35px] hover:scale-[1.03] font-bold duration-300 cursor-pointer"
   >
    {PersonelData.icon}
   </h1>
   <Image
    onClick={close}
    src={closeIcon}
    loading="lazy"
    alt="close"
    className="size-9 cursor-pointer"
    width={30}
    height={30}
   />
  </div>
 );
};
