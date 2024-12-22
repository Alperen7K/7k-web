import { StaticImageData } from "next/image";

import { ktp_web_new } from "./ktp-web-new";
import { avt_web } from "./avt-web";
import { form_builder } from "./form-builder";
import { news_writting } from "./news-writting";
import { scanner } from "./scanner";
import { binance_bot } from "./binance-bot";
import { shift_export } from "./shift-export";
import { ktp_web } from "./ktp-web";
import { tp2ae } from "./tp2ae";
import { press } from "./press";
import { events } from "./events";
import { ozteknik } from "./ozteknik";
import { avt_academy } from "./avt-academy";
import { web3ogren } from "./web3ogren";

export type PortfolioDataType = {
 path: string;
 name: string;
 duty: string;
 techs: string[];
 detail: string;
 photos: StaticImageData[];
 link?: string;
};

export const PortfolioData: PortfolioDataType[] = [
 ktp_web_new,
 avt_web,
 avt_academy,
 ozteknik,
 form_builder,
 news_writting,
 web3ogren,
 scanner,
 binance_bot,
 shift_export,
 ktp_web,
 tp2ae,
 press,
 events,
];
