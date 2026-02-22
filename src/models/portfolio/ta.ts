import { PortfolioDataType } from ".";
import ta_1 from "../../../public/portfolio-images/ta/1.png";
import ta_2 from "../../../public/portfolio-images/ta/2.png";

export const ta: PortfolioDataType = {
 path: "takeAssistant",
 name: "Take Assistant",
 duty: "Freelance",
 techs: [
  "Next.js",
  "Directus",
  "Typescript",
  "Material Design",
  "Zustand",
  "Tailwindcss",
 ],
 detail:
  "Take Assistant is a next-generation, AI-powered classifieds platform designed to redefine the marketplace experience by replacing traditional commission-heavy models with data-driven smart matching. I developed the platform's architecture using a headless approach with Directus and a high-performance Next.js frontend, integrating 20+ AI-driven tools for price optimization and market analytics. The system prioritizes lead quality by utilizing behavioral analysis to filter spam and ensuring precise alignment between buyers and sellers, effectively eliminating inefficient interactions.",
 photos: [ta_2, ta_1],
};
