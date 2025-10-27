import React from "react";

export default function CV() {
  return (
    <iframe
      loading="lazy"
      className="w-full h-full z-[1000] fixed top-0 left-0"
      src="/cv/cv.pdf#toolbar=1&navpanes=0&scrollbar=1"
      title="CV"
    ></iframe>
  );
}
