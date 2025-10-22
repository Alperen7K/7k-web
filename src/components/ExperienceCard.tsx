import { ExperienceDataType } from "@/models/experience.data";
import { PortfolioData, PortfolioDataType } from "@/models/portfolio";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export const ExperienceCard = ({ exp }: { exp: ExperienceDataType }) => {
  const getTypeVariant = (type: string) => {
    switch (type.toLowerCase()) {
      case "job (full time)":
        return "default";
      case "job (part time)":
        return "secondary";
      case "internship":
        return "outline";
      case "voluntering":
        return "destructive";
      default:
        return "outline";
    }
  };

  // İlgili projeleri bul
  const getRelatedProjects = (companyName: string): PortfolioDataType[] => {
    return PortfolioData.filter(
      (project) =>
        project.duty.toLowerCase().includes(companyName.toLowerCase()) ||
        companyName.toLowerCase().includes(project.duty.toLowerCase())
    );
  };

  const relatedProjects = getRelatedProjects(exp.company);

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 hover:border-white/30">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Başlık ve Tarih */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">
                {exp.company}
              </h3>
              <h4 className="text-lg font-semibold text-muted-foreground">
                {exp.jobTitle}
              </h4>
            </div>

            <div className="flex flex-col items-start lg:items-end gap-2">
              <Badge variant={getTypeVariant(exp.type)} className="text-sm">
                {exp.type}
              </Badge>
              <span className="text-sm text-muted-foreground font-mono">
                {exp.date}
              </span>
            </div>
          </div>

          <Separator />

          {/* Açıklama */}
          <div className="space-y-2">
            <p className="text-muted-foreground leading-relaxed text-justify">
              {exp.description}
            </p>
          </div>

          {/* İlgili Projeler */}
          {relatedProjects.length > 0 && (
            <>
              <Separator />
              <div className="space-y-3">
                <h5 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  İlgili Projeler ({relatedProjects.length})
                </h5>
                <div className="relative">
                  <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                    {relatedProjects.map((project, index) => (
                      <div
                        key={index}
                        className="group flex-shrink-0 w-48 bg-background/20 rounded-lg border border-border/20 hover:border-white/30 transition-all duration-300 hover:shadow-sm"
                      >
                        <Link
                          href={`/portfolio/${project.path}`}
                          className="block p-3"
                        >
                          <div className="space-y-2">
                            {/* Proje Görseli - Küçük */}
                            <div className="relative aspect-video rounded-md overflow-hidden bg-muted/50">
                              <Image
                                src={project.photos[0]}
                                alt={project.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>

                            {/* Proje Bilgileri - Minimalist */}
                            <div className="space-y-1">
                              <h6 className="font-medium text-foreground text-xs leading-tight line-clamp-2">
                                {project.name}
                              </h6>
                              <div className="flex gap-1">
                                <Badge
                                  variant="outline"
                                  className="text-[10px] px-1.5 py-0.5 h-auto"
                                >
                                  {project.techs[0]}
                                </Badge>
                                {project.techs.length > 1 && (
                                  <Badge
                                    variant="outline"
                                    className="text-[10px] px-1.5 py-0.5 h-auto text-muted-foreground"
                                  >
                                    +{project.techs.length - 1}
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>

                  {/* Scroll indicator */}
                  {relatedProjects.length > 2 && (
                    <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-card/80 to-transparent pointer-events-none" />
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
