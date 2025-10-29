import React from "react";
import { SidebarBody } from "./SidebarBody";
import { ConfigProvider, Drawer } from "antd";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarFooter } from "./SidebarFooter";

export const SideBar = ({
 open,
 close,
}: {
 open: boolean;
 close: () => void;
}) => {
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
       width={"100%"}
       footer={<SidebarFooter />}
       keyboard
       className="border-l-[1px] border-solid border-white/70 max-h-screen"
     >
       <SidebarHeader close={close} />
       <SidebarBody close={close} />
     </Drawer>
   </ConfigProvider>
 );
};
