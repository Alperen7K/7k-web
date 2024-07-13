"use client";
import mail from "../../../public/icons/mail.svg";
import menu from "../../../public/icons/menu.svg";
import phone from "../../../public/icons/phone.svg";
import github from "../../../public/icons/github.svg";
import closeIcon from "../../../public/icons/close.svg";
import linkedin from "../../../public/icons/linkedin.svg";
import instagram from "../../../public/icons/instagram.svg";
import Image from "next/image";
import React, { useState } from "react";
import { ConfigProvider, Drawer } from "antd";

export default function Navbar() {
 const [open, setOpen] = useState(false);
 let labelClass = `m-2   px-2 text-[16px] md:text-[20px] rounded-b-lg hover:border-b-[3px] text-white border-solid hover:border-white box-border duration-200  `;

 return (
  <div className="sticky top-0 z-50 py-1 right-0 left-0 bg-payne_gray navbar-font backdrop-blur-sm bg-black text-white border-b-2 border-solid border-white/70 ">
   {/* Side Bar */}
   <SideBar open={open} close={() => setOpen(false)} />
   <div className="h-[60px] w-full   flex items-center justify-center">
    <div className="w-[100vw] sm:w-[90vw] h-full  rounded-b-full  px-10   flex items-center justify-between">
     <a href="/">
      <label className="text-[35px] hover:scale-[1.03] font-bold duration-300 ">
       7K's
      </label>
     </a>
     <div className="sm:block hidden">
      <a
       href="/about"
       className={
        labelClass // labelClass + `${isShow === "about" ? "border-b-[2px]" : "border-b-0"}`
       }
      >
       About
      </a>
      <a
       href="/skills"
       className={
        labelClass
        // `${isShow === "skills" ? "border-b-[2px] " : "border-b-0 "}`
       }
      >
       Skills
      </a>
      <a
       href="/portfolio"
       className={
        labelClass
        // `${isShow === "portfolio" ? "border-b-[2px] " : "border-b-0"}`
       }
      >
       Portfolio
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
 let draverLabelClass = "mx-2  text-[22px] text-white font-bold ";
 const iconClass =
  "w-10 shadow rounded-lg  hover:bg-antrasit duration-300 hover:scale-[1.04] ";

 return (
  <ConfigProvider
   theme={{
    token: {
     colorIcon: "#fff",
     colorBgElevated: "#393D46",
    },
   }}
  >
   <Drawer
    // title="Basic Drawer"
    onClose={close}
    open={open}
    closeIcon={
     <div className="w-full flex">
      <Image src={closeIcon} alt="close" className="" width={48} height={48} />
     </div>
    }
    width={250}
    footer={
     <div>
      <h1 className="text-[18px] font-bold text-white mb-4">
       Mehmet Alperen YEDİK
      </h1>
      <div className="flex flex-col gap-2 mt-4">
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
      <div className="w-full justify-center flex gap-4 my-6">
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
     </div>
    }
    keyboard
    className="text-black flex flex-col items-center font-[montserrat]"
   >
    <div className="w-full  text-black flex flex-col items-start">
     <div className="flex flex-col justify-between gap-6 items-start">
      <a href="/about" onClick={close} className={draverLabelClass}>
       About
      </a>
      <a href="/skills" onClick={close} className={draverLabelClass}>
       Skills
      </a>
      <a href="/portfolio" onClick={close} className={draverLabelClass}>
       Portfolio
      </a>
     </div>
    </div>
   </Drawer>
  </ConfigProvider>
 );
};
