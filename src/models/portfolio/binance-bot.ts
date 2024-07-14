import { PortfolioDataType } from "./portfolio.data";
import binance_bot_1 from "../../../public/portfolio-images/binance-bot/binance-2.png";
import binance_bot_2 from "../../../public/portfolio-images/binance-bot/binance-3.png";

export const binance_bot: PortfolioDataType = {
 path: "binance-bot",
 name: "Binance Bot",
 duty: "Freelance",
 techs: [
  "React.js",
  "Typescript",
  "Antd",
  "Tailwindcss",
  "React-Apexcharts",
  "Axios",
 ],
 detail:
  "In this project, I developed an interface for a bot with a buy-sell decision mechanism based on the formulas selected by the user. The interface consists of two pages. The first interface provides a platform where users can view and edit the formulas. The second interface displays a table based on the formulas set by the user. Additionally, the user can initiate the bot for the selected currency pair, along with a graph showing trends based on the selected currency pair and table data.",
 photos: [binance_bot_1, binance_bot_2],
};
