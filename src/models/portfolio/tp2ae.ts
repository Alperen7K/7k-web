import { PortfolioDataType } from "./portfolio.data";
import tp2ae_1 from "../../../public/portfolio-images/tp2ae/second.png";
import tp2ae_2 from "../../../public/portfolio-images/tp2ae/third.png";

export const tp2ae: PortfolioDataType = {
 path: "tp2ae",
 name: "Trendyol to AliExpress",
 duty: "Freelance",
 techs: ["React.js", "Javascript", "Antd", "Tailwindcss", "Axios"],
 detail:
  "In this project, we addressed the challenge of transferring products from Trendyol to AliExpress, which was cumbersome for the person performing the transfer. We solved this problem with a product transfer automation system. In this project, users first log into Trendyol and select the products they want to transfer using our extension. Then, through the 'Transfer Products' button on the extension, they are directed to our automation system. In our automation application, product information is retrieved via the Trendyol API and directed to the second page. On this page, we can categorize the products in bulk and ask category-related questions. After all products are processed, on the next page, we adjust the pricing and change names before transferring the products to AliExpress. Capsule Technology Platform Website - A corporate and dynamic website describing the Capsule Technology Platform.",
 photos: [tp2ae_1, tp2ae_2],
};
