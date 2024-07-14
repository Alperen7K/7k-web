import { PortfolioDataType } from "./portfolio.data";
import events_1 from "../../../public/portfolio-images/events/Screenshot 2024-07-14 at 16.29.23.png";
import events_2 from "../../../public/portfolio-images/events/Screenshot 2024-07-14 at 16.29.34.png";

export const events: PortfolioDataType = {
 path: "events",
 name: "Kapsül Etkinlik",
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
  "In this project, we developed a single website to showcase events organized by the Kapsul Technology Platform. The project consists of one backend and one frontend component. I managed the frontend part of the project. The frontend includes an admin panel protected by an authorization system, allowing users to view, edit, delete, or create new events according to their preferences. Additionally, there is a section where published events are displayed, and I implemented a responsive structure to showcase all events efficiently. This ensures that visitors can easily access all the details of the events.",
 photos: [events_1, events_2],
};
