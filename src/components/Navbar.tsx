"use client";
import mail from "../../public/icons/mail.svg";
import menu from "../../public/icons/menu.svg";
import phone from "../../public/icons/phone.svg";
import github from "../../public/icons/github.svg";
import closeIcon from "../../public/icons/close.svg";
import linkedin from "../../public/icons/linkedin.svg";
import instagram from "../../public/icons/instagram.svg";
import arrowIcon from "../../public/icons/arrow.svg";
import Image from "next/image";
import React, { useState } from "react";
import { ConfigProvider, Drawer } from "antd";
import { useRouter as useNavigate } from "next/navigation";

export default function Navbar() {
 const navigator = useNavigate();
 const [open, setOpen] = useState(false);
 let labelClass = ` cursor-pointer text-[16px] md:text-[20px] rounded-b-lg hover:border-b-[3px] text-white border-solid hover:border-white box-border duration-200  `;

 return (
  <div className="sticky top-0 z-50 py-1 right-0 left-0 bg-payne_gray navbar-font backdrop-blur-sm bg-black text-white border-b-2 border-solid border-white/70 ">
   {/* Side Bar */}
   <SideBar open={open} close={() => setOpen(false)} />
   <div className="h-[60px] w-full   flex items-center justify-center">
    <div className="w-[95vw] sm:w-[85vw] mx-auto h-full  rounded-b-full    flex items-center justify-between">
     <a href="/">
      <label className="text-[35px] hover:scale-[1.03] font-bold duration-300 cursor-pointer">
       {"7K's"}
      </label>
     </a>
     <div className="sm:block hidden space-x-6">
      <a onClick={() => navigator.push("/portfolio")} className={labelClass}>
       Portfolio
      </a>
      <a onClick={() => navigator.push("/used-techs")} className={labelClass}>
       Used Technologies
      </a>
     </div>
     <Image
      src={menu}
      onClick={() => {
       setOpen(true);
      }}
      width={36}
      height={36}
      alt="menu icon"
      className="w-9 sm:hidden"
     />
    </div>
   </div>
  </div>
 );
}

const SideBar = ({ open, close }: { open: boolean; close: () => void }) => {
 return (
  <ConfigProvider
   theme={{
    token: {
     colorIcon: "#fff",
     colorBgElevated: "#000",
    },
   }}
  >
   <Drawer
    onClose={close}
    open={open}
    closeIcon={<></>}
    styles={{
     body: {
      padding: 0,
     },
     header: {
      paddingTop: 0,
      paddingBottom: 0,
      display: "none",
     },
     footer: {
      padding: 0,
     },
    }}
    width={250}
    footer={<Footer />}
    keyboard
    className="border-l-[1px] border-solid border-white/70 max-h-screen"
   >
    <Header close={close} />
    <Body close={close} />
   </Drawer>
  </ConfigProvider>
 );
};

const Header = ({ close }: { close: () => void }) => {
 const navigator = useNavigate();

 return (
  <div className="w-full flex items-center text-white justify-between px-4 py-2 border-b-[1px] border-solid border-white/70">
   <h1
    onClick={() => {
     close();
     navigator.push("/");
    }}
    className="text-[35px] hover:scale-[1.03] font-bold duration-300 cursor-pointer"
   >
    {"7K's"}
   </h1>
   <Image
    src={closeIcon}
    alt="close"
    className="size-9"
    width={30}
    height={30}
   />
  </div>
 );
};

const Body = ({ close }: { close: () => void }) => {
 const navigator = useNavigate();

 const dashed = () => {
  return (
   <div className="group-hover:block flex-grow  hidden h-[0.2px] border-[1px] border-dashed border-white/40 mx-1.5" />
  );
 };

 const arrow = () => {
  return (
   <Image
    src={arrowIcon}
    alt="Arrow icon"
    width={4}
    height={4}
    className="size-4 hidden group-hover:block duration-300 group-hover:animate-slideRight "
   />
  );
 };

 const title = (content: string, navigate: string) => {
  return (
   <a
    onClick={() => {
     close();
     navigator.push(navigate);
    }}
    rel={content + "link"}
    className={`group flex items-center justify-between duration-300 text-white hover:text-white px-2 py-1 rounded-xl text-[32px] font-bold ${
     navigate && "cursor-pointer   hover:bg-white/15"
    }`}
   >
    {content}
    {navigate && (
     <>
      {dashed()}
      {arrow()}
     </>
    )}
   </a>
  );
 };

 return (
  <div className=" w-full flex flex-col gap-y-4 px-2 py-6  flex-grow">
   {title("Portfolio", "/portfolio")}
   {title("Used Technologies", "/used-techs")}
  </div>
 );
};

const Footer = () => {
 const iconClass =
  "w-6 shadow rounded-lg  hover:bg-antrasit duration-300 hover:scale-[1.04] ";

 return (
  <div className="mx-auto w-full px-4 py-2 space-y-2 border-t-[1px] border-solid border-white/70 ">
   <div className="w-full justify-center flex gap-x-3">
    <a href="https://www.instagram.com/alperenyedik/" target="_blank">
     <Image
      src={instagram}
      className={iconClass}
      alt="instagram logo"
      width={40}
      height={40}
     />
    </a>
    <a href="https://www.linkedin.com/in/alperen7k/" target="_blank">
     <Image
      src={linkedin}
      className={iconClass}
      width={40}
      height={40}
      alt="linkedin logo"
     />
    </a>
    <a href="https://github.com/Alperen7K" target="_blank">
     <Image
      src={github}
      className={iconClass}
      width={40}
      height={40}
      alt="github logo"
     />
    </a>
   </div>
   <div className="flex flex-col items-center gap-2">
    <a
     className="flex items-center gap-2 cursor-pointer text-[10px] font-bold text-white"
     href="tel:+90 546 434 60 08"
    >
     <Image
      src={phone}
      className={" w-[15px] "}
      width={15}
      height={15}
      alt="Phone logo"
     />
     +90 546 434 60 08
    </a>
    <a
     className="flex items-center gap-2 cursor-pointer text-[10px] font-bold text-white"
     href="mailto:mehmetalperenyedik@gmail.com"
    >
     <Image
      src={mail}
      className={" w-[15px] "}
      alt="mail logo"
      width={15}
      height={15}
     />
     mehmetalperenyedik@gmail.com
    </a>
   </div>
  </div>
 );
};
