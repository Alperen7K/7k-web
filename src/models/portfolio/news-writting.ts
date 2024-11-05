import { PortfolioDataType } from ".";
import news_writting_1 from "../../../public/portfolio-images/news-writting/main-page.png";
import news_writting_2 from "../../../public/portfolio-images/news-writting/fikir-ver.png";

export const news_writting: PortfolioDataType = {
 path: "news-automation",
 name: "News Writing Automation",
 duty: "Hackathon",
 techs: ["Next.js", "Strapi", "Typescript", "Antd", "Tailwindcss", "GrapQL"],
 detail:
  "This project is a result of the initial steps taken in a venture initiated with my circle of friends. I delved into speech-to-text and text-to-speech libraries to develop a voice assistant on the web. At the end of this project, there is a messaging interface available. Users can activate the assistant by placing the necessary keywords at the beginning of their sentences (for example: 'Hey Ema'), and all the questions they ask will be displayed on the screen. These questions are then directed to our backend where our AI processes them and sends back responses, which are then displayed in the response box for the user.",
 photos: [news_writting_1, news_writting_2],
};
