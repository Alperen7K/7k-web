import { StaticImageData } from "next/image";

import ktp_web_1 from "../../public/portfolio-images/ktp-web/Screenshot 2024-07-13 at 13.36.24.png";
import ktp_web_2 from "../../public/portfolio-images/ktp-web/Screenshot 2024-07-13 at 13.37.13.png";

import avt_web_1 from "../../public/portfolio-images/avt-web/Screenshot 2024-07-13 at 13.37.55.png";
import avt_web_2 from "../../public/portfolio-images/avt-web/Screenshot 2024-07-13 at 13.38.10.png";

export type PortfolioDataType = {
 path: string;
 name: string;
 duty: string;
 techs: string[];
 detail: string;
 photos: StaticImageData[];
};

export const PortfolioData: PortfolioDataType[] = [
 {
  path: "kapsul-web-new",
  name: "Kapsul Technology Platform Website (New)",
  duty: "Kapsul Technology Platform",
  techs: [
   "React.js",
   "Typescript",
   "Gsap",
   "Antd",
   "Zustand",
   "Tailwindcss",
   "Axios",
  ],
  detail:
   "Kapsul Forms, developed for managing applications in my workplace, allows dynamic creation and editing of forms. It ensures mandatory field checks during form completion. Within the completed forms, there is a page where each response is displayed in a table according to question titles. Users can search among the responses and also sort them alphabetically. Additionally, there are predefined template questions on the form creation screen, and users can add their own questions below these templates. After using these templates, on the page displaying responses, users can view or print all the information of the respondent neatly arranged in a PDF format. Kapsul Technology Platform Website.",
  photos: [ktp_web_1, ktp_web_2],
 },
 {
  path: "aivisiontech-website",
  name: "aivisiontech Website",
  duty: "Freelance",
  techs: [
   "React.js",
   "Typescript",
   "Gsap",
   "Antd",
   "Zustand",
   "Tailwindcss",
   "Three.Js",
   "Axios",
  ],
  detail:
   "Kapsul Forms, developed for managing applications in my workplace, allows dynamic creation and editing of forms. It ensures mandatory field checks during form completion. Within the completed forms, there is a page where each response is displayed in a table according to question titles. Users can search among the responses and also sort them alphabetically. Additionally, there are predefined template questions on the form creation screen, and users can add their own questions below these templates. After using these templates, on the page displaying responses, users can view or print all the information of the respondent neatly arranged in a PDF format. Kapsul Technology Platform Website.",
  photos: [avt_web_1, avt_web_2],
 },
];
