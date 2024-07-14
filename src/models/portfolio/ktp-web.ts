import { PortfolioDataType } from "./portfolio.data";
import ktp_web_1 from "../../../public/portfolio-images/ktp-web/Screenshot 2024-07-14 at 16.22.15.png";
import ktp_web_2 from "../../../public/portfolio-images/ktp-web/Screenshot 2024-07-14 at 16.22.22.png";

export const ktp_web: PortfolioDataType = {
 path: "kapsul-web",
 name: "Kapsul Technology Platform Website (Old)",
 duty: "Kapsul Technology Platform",
 techs: [
  "React.js",
  "Javascript",
  "Framer Motion",
  "Antd",
  "Tailwindcss",
  "Axios",
 ],
 detail:
  "An interface used to display the news published in the press for the Kapsül Technology Platform by adding news, editing the news and displaying the news that is on the air.",
 photos: [ktp_web_1, ktp_web_2],
};
