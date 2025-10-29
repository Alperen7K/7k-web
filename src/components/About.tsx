import React from "react";
import { PersonelData } from "@/models/personel.data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const About = () => {
  const skills = [
    "React.js",
    "Next.js",
    "Node.js",
    ".NET Core",
    "JavaScript",
    "TypeScript",
    "C#",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Git",
    "Nginx",
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl lg:text-4xl font-bold tracking-tight">
              About Me
            </CardTitle>
            <Separator className="mx-auto w-20 mt-4" />
          </CardHeader>

          <CardContent className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground text-center lg:text-left">
                {PersonelData.description}
              </p>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center lg:text-left">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-sm px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-border/50">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-lg mb-2">Frontend</h4>
                  <p className="text-muted-foreground">
                    Modern web applications development
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-lg mb-2">Backend</h4>
                  <p className="text-muted-foreground">
                    Scalable and secure APIs development
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
