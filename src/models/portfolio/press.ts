import { PortfolioDataType } from "./portfolio.data";
import press_1 from "../../../public/portfolio-images/basında-biz/Screenshot 2024-07-14 at 16.29.50.png";
import press_2 from "../../../public/portfolio-images/basında-biz/Screenshot 2024-07-14 at 16.29.59.png";

export const press: PortfolioDataType = {
 path: "press",
 name: "Kapsül Basında Biz",
 duty: "Kapsul Technology Platform",
 techs: [
  "React.js",
  "Typescript",
  "Antd",
  "Tailwindcss",
  "Formik",
  "Yup",
  "Axios",
 ],
 detail:
  "In this project, we developed a single website to showcase news articles featuring the Kapsul Technology Platform. The project consists of one backend and one frontend component. I managed the frontend part of the project. The frontend includes an admin panel protected by an authorization system, allowing users to view published posts and edit, delete, or create new ones according to their preferences. Additionally, there is a section where published posts are displayed, and I implemented a responsive structure to showcase all news articles efficiently.",
 photos: [press_1, press_2],
};
