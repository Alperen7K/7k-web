"use client";
import React from "react";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core";

const PdfViewer = ({ fileUrl }: { fileUrl: string }) => {
 return (
  <Worker
   workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
  >
   <div className="absolute  min-h-screen w-full z-[2000]">
    <Viewer
     theme={{
      theme: "dark",
     }}
     fileUrl={fileUrl}
    />
   </div>
  </Worker>
 );
};

export default PdfViewer;
