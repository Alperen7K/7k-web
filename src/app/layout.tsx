import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
 title: "Mehmet Alperen YEDİK",
 description: "owner Mehmet Alperen YEDİK",
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
 children,
 navbar,
 footer,
}: Readonly<{
 children: React.ReactNode;
 navbar: React.ReactNode;
 footer: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <body className={montserrat.className}>
    {navbar}
    <div className="min-h-screen w-full overflow-x-hidden bg-black  text-white">
     {children}
    </div>
    {footer}
   </body>
  </html>
 );
}
