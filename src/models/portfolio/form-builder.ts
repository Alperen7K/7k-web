import { PortfolioDataType } from "./portfolio.data";
import form_builder_1 from "../../../public/portfolio-images/form-builder/Screenshot 2024-07-14 at 15.54.33.png";
import form_builder_2 from "../../../public/portfolio-images/form-builder/Screenshot 2024-07-14 at 15.54.46.png";

export const form_builder: PortfolioDataType = {
 path: "kapsul-forms",
 name: "Kapsul Forms",
 duty: "Kapsul Technology Platform",
 techs: ["React.js", "Javascript", "Antd", "Tailwindcss", "Axios", "React-pdf"],
 detail:
  "Kapsul Forms, developed for managing applications in my workplace, allows dynamic creation and editing of forms. It ensures mandatory field checks during form completion. Within the completed forms, there is a page where each response is displayed in a table according to question titles. Users can search among the responses and also sort them alphabetically. Additionally, there are predefined template questions on the form creation screen, and users can add their own questions below these templates. After using these templates, on the page displaying responses, users can view or print all the information of the respondent neatly arranged in a PDF format. Kapsul Technology Platform Website.",
 photos: [form_builder_2, form_builder_1],
};
