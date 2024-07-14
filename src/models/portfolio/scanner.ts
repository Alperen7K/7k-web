import { PortfolioDataType } from "./portfolio.data";
import scanner_1 from "../../../public/portfolio-images/scanner/main.png";
import scanner_2 from "../../../public/portfolio-images/scanner/shift.png";

export const scanner: PortfolioDataType = {
 path: "kapsul-scanner",
 name: "Kapsul Scanner",
 duty: "Kapsul Technology Platform",
 techs: [
  "Next.js",
  "Typescript",
  "Antd",
  "Tailwindcss",
  "Use-Scan-Detection",
  "Zustand",
  "Axios",
 ],
 detail:
  "This project is developed for both tracking working hours and event attendance. We use a computer with a touchscreen and a barcode scanner as hardware. Based on these hardware specifications, this project I've developed operates for two different purposes from a single homepage. Upon scanning the barcode on the homepage, the system confirms which project it belongs to and redirects accordingly. For tracking working hours, it retrieves the individual's recent transactions and displays the operations they can perform accordingly. For the event system, it identifies the person from the data obtained through the barcode, records their attendance in the background, and provides brief information about where the event is located. When the person scans their barcode again at the end of the event, the system records their attendance again and prompts them with a panel where they can anonymously provide feedback about the event.",
 photos: [scanner_1, scanner_2],
};
