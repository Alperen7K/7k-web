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
    <section className="relative min-h-screen w-full bg-gradient-to-br from-black via-black to-gray-900/30">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[80vh]">
          {/* Sol taraf - Metin içeriği */}
          <div className="flex-1 space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Web Developer
              </Badge>
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
                className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight"
                repeat={Infinity}
              />
            </div>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {PersonelData.description.split(".")[0]}.
                </p>
              </CardContent>
            </Card>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <Badge variant="outline">React.js</Badge>
              <Badge variant="outline">Next.js</Badge>
              <Badge variant="outline">Node.js</Badge>
              <Badge variant="outline">.NET Core</Badge>
              <Badge variant="outline">TypeScript</Badge>
            </div>
          </div>

          {/* Sağ taraf - Profil resmi */}
          <div className="flex-1 flex justify-center items-center order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-gray-300/10 rounded-full blur-3xl scale-110" />
              <Card className="relative bg-card/80 backdrop-blur-sm border-2 border-border/50 rounded-full p-2">
                <CardContent className="p-0">
                  <Image
                    src={landing}
                    alt="Mehmet Alperen Yedik"
                    width={400}
                    height={400}
                    className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full"
                    priority
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
