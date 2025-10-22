import { PortfolioDataType } from ".";
import ibs_1 from "../../../public/portfolio-images/ibs/1.png";
import ibs_2 from "../../../public/portfolio-images/ibs/2.png";

export const ibs: PortfolioDataType = {
  path: "ibs",
  name: "Fire Department Information System",
  duty: "City Technology Center",
  techs: [
    "ASP.Net Core",
    "React.js",
    "JavaScript",
    "Antd",
    "Zustand",
    "Tailwindcss",
    "Axios",
  ],
  detail:
    "I led the Fire Department Information System (İBS) project for Konya Metropolitan Municipality Fire Department as the Product Owner and Full Stack Developer (including UX/UI). The system, featuring 80+ tables, automated Resource Management, complex HR (Shift/Payroll Automation), and Digital Inspection processes. I utilized Clean Architecture with ASP.NET Core 8 for the Backend and ReactJS for the Frontend. I delivered end-to-end digital transformation, maximizing corporate efficiency and risk management through PostGIS integration and Docker usage.",
  photos: [ibs_1, ibs_2],
};
