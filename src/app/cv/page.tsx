"use client";
import React from "react";
import { Button, Tooltip } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

export default function CV() {
 return (
  <div className="fixed inset-0 z-[1000] bg-black">
   <Tooltip title="Geri Dön">
    <Button
     onClick={() => window.history.back()}
     className="fixed left-4 top-4 "
     icon={<ArrowLeftOutlined />}
     type="default"
     size="large"
    />
   </Tooltip>
   <iframe
    loading="lazy"
    className="w-full min-h-screen"
    src="https://www.canva.com/design/DAGZwdiGFQ0/fhcuIeEveNUbVRAV5uEbTw/view?embed"
    allow="fullscreen"
   ></iframe>
  </div>
 );
}
