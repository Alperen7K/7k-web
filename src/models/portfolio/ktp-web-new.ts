import { PortfolioDataType } from "./portfolio.data";
import ktp_web_1 from "../../../public/portfolio-images/ktp-web-new/Screenshot 2024-07-13 at 13.36.24.png";
import ktp_web_2 from "../../../public/portfolio-images/ktp-web-new/Screenshot 2024-07-13 at 13.37.13.png";

export const ktp_web_new: PortfolioDataType = {
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
};
