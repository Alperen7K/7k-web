import git from "../../public/web-tech-icons/Git.svg";
import npm from "../../public/web-tech-icons/npm.svg";
import css from "../../public/web-tech-icons/css3.svg";
import html from "../../public/web-tech-icons/html5.svg";
import nginx from "../../public/web-tech-icons/NGINX.svg";
import github from "../../public/web-tech-icons/GitHub.svg";
import js from "../../public/web-tech-icons/javascript.svg";
import nodejs from "../../public/web-tech-icons/nodejs.svg";
import reactjs from "../../public/web-tech-icons/react.svg";
import ts from "../../public/web-tech-icons/typescript.svg";
import ubuntu from "../../public/web-tech-icons/Ubuntu.svg";
import vercel from "../../public/web-tech-icons/Vercel.svg";
import nextjs from "../../public/web-tech-icons/Next.js.svg";
import antd from "../../public/web-tech-icons/Ant Design.svg";
import express from "../../public/web-tech-icons/Express.svg";
import mongodb from "../../public/web-tech-icons/mongodb.svg";
import nodemon from "../../public/web-tech-icons/Nodemon.svg";
import threejs from "../../public/web-tech-icons/Three.js.svg";
import tailwindcss from "../../public/web-tech-icons/Tailwind CSS.svg";
import csharp from "../../public/web-tech-icons/CSharp.svg";
import dotnetcore from "../../public/web-tech-icons/DotNetCore.svg";

export type UsedTechsDataType = {
 img: any;
 name: string;
 link: string;
};

export const UsedTechsData: UsedTechsDataType[] = [
 {
  img: js,
  name: "Javascript",
  link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
 },
 { img: ts, name: "Typescript", link: "https://www.typescriptlang.org/" },
 { img: nodejs, name: "Node.Js", link: "https://nodejs.org/" },
 { img: reactjs, name: "React.Js", link: "https://reactjs.org/" },
 { img: nextjs, name: "Next.Js", link: "https://nextjs.org/" },
 {
  img: csharp,
  name: "C#",
  link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
 },
 {
  img: dotnetcore,
  name: ".Net Core",
  link: "https://dotnet.microsoft.com/en-us/download",
 },
 { img: git, name: "Git", link: "https://git-scm.com/" },
 { img: nginx, name: "NGINX", link: "https://www.nginx.com/" },
 { img: npm, name: "npm", link: "https://www.npmjs.com/" },
 { img: threejs, name: "Three.js", link: "https://threejs.org/" },
 { img: express, name: "Express", link: "https://expressjs.com/" },
 { img: mongodb, name: "MongoDB", link: "https://www.mongodb.com/" },
 { img: nodemon, name: "Nodemon", link: "https://nodemon.io/" },
 {
  img: css,
  name: "CSS3",
  link: "https://www.w3.org/Style/CSS/Overview.en.html",
 },
 {
  img: html,
  name: "HTML5",
  link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
 },
 { img: github, name: "GitHub", link: "https://github.com/" },
 { img: ubuntu, name: "Ubuntu", link: "https://ubuntu.com/" },
 { img: vercel, name: "Vercel", link: "https://vercel.com/" },
 { img: antd, name: "Ant Design", link: "https://ant.design/" },
 { img: tailwindcss, name: "Tailwind CSS", link: "https://tailwindcss.com/" },
];
