import React from "react";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ExperienceData, ExperienceDataType } from "@/models/experience.data";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const ExperienceContainer = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl lg:text-4xl font-bold tracking-tight">
              Deneyim
            </CardTitle>
            <Separator className="mx-auto w-20 mt-4" />
          </CardHeader>
        </Card>

        <div className="mt-8 space-y-6">
          {ExperienceData.map((exp: ExperienceDataType, index: number) => {
            return <ExperienceCard key={index} exp={exp} />;
          })}
        </div>
      </div>
    </section>
  );
};
