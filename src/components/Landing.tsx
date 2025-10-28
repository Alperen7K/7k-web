"use client";
import React from "react";
import "../app/globals.css";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { PersonelData } from "@/models/personel.data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import landing from "../../public/home-page/cv-img.png";

export const Landing = () => {
  return (
    <section className="pb-8 sm:pb-12 lg:pb-16 pt-32 sm:pt-24 lg:pt-32">
      <div className="container mx-auto px-4">
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-xl overflow-hidden">
          <CardContent className="p-4 sm:p-6 md:p-8 lg:p-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-16">
              {/* Sağ taraf - Profil resmi */}
              <div className="flex-1 flex justify-center items-center w-full lg:w-auto lg:order-2">
                <div className="relative group">
                  {/* Glow efekti */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

                  <Card className="relative bg-card/80 backdrop-blur-sm border-2 border-border/50 rounded-full overflow-hidden shadow-2xl group-hover:border-border transition-all duration-500">
                    <CardContent className="p-2">
                      <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80">
                        <Image
                          src={landing}
                          alt="Mehmet Alperen Yedik"
                          width={400}
                          height={400}
                          className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                          priority
                        />
                        {/* Subtle overlay efekti */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Sol taraf - Metin içeriği */}
              <div className="flex-1 w-full space-y-6 sm:space-y-8 text-center lg:text-left lg:order-1">
                <div className="space-y-4 sm:space-y-6">
                  <div className="inline-block">
                    <Badge
                      variant="secondary"
                      className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      Web Developer
                    </Badge>
                  </div>

                  <div className="min-h-[100px] sm:min-h-[120px] lg:min-h-[180px] flex items-center justify-center lg:justify-start">
                    <TypeAnimation
                      sequence={[
                        PersonelData.landing.firstLine,
                        1000,
                        PersonelData.landing.secondLine,
                        1000,
                        PersonelData.landing.thirdLine,
                        1000,
                        PersonelData.landing.fourthLine,
                        1000,
                      ]}
                      wrapper="h1"
                      speed={30}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight tracking-tight"
                      repeat={Infinity}
                    />
                  </div>
                </div>

                <Card className="border-border/50 hover:bg-gray-900/70 transition-colors duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                      {PersonelData.description.split(".")[0]}.
                    </p>
                  </CardContent>
                </Card>

                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {[
                    "React.js",
                    "Next.js",
                    "Node.js",
                    ".NET Core",
                    "TypeScript",
                  ].map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs sm:text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
