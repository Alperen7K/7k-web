import { PortfolioDataType } from "./portfolio.data";
import shift_export_1 from "../../../public/portfolio-images/shift-export/shift-export-1.png";
import shift_export_2 from "../../../public/portfolio-images/shift-export/shift-export-2.png";

export const shift_export: PortfolioDataType = {
 path: "kapsul-overtime",
 name: "Kapsul Overtime Tracking System",
 duty: "Kapsul Technology Platform",
 techs: [
  "React.js",
  "Typescript",
  "Antd",
  "Tailwindcss",
  "Axios",
  "React-Table",
 ],
 detail:
  "This project is an admin page developed for tracking working hours. The admin page consists of three pages. The first one is the daily work schedule, where we display the entry, exit, and break times of individuals who have working hours during the day. The second page displays a monthly table of past work entries and exits, allowing individuals to select a month and review their work entries and exits for that month. The third page is similar to the second one, but it displays monthly break information.",
 photos: [shift_export_1, shift_export_2],
};
