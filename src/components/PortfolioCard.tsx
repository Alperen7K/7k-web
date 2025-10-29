"use client";
import React from "react";
import Image from "next/image";
import { LinkCard } from "./LinkCard";
import { useRouter } from "next/navigation";
import { TechnologyCard } from "./TechnologyCards";
import { PortfolioDataType } from "@/models/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PortfolioCard({
  data,
  key,
}: {
  data: PortfolioDataType;
  key: number;
}) {
  const navigate = useRouter();
  return (
    <Card
      onClick={() => {
        navigate.push("/portfolio/" + data.path);
      }}
      key={key}
      className="cursor-pointer w-full border-border/50 hover:bg-accent/50 transition-colors"
    >
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <Image
            src={data.photos[0]}
            alt={data.name + " image"}
            width={300}
            loading="lazy"
            quality={70}
            height={150}
            className="w-full sm:w-[45%] aspect-[20/11] object-cover object-center rounded-lg"
          />
          <div className="w-full space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-x-2">
                <h1 className="font-bold text-3xl line-clamp-1">{data.name}</h1>
              </div>
              <div className="flex items-center gap-x-2">
                <Badge variant="secondary" className="text-xs">
                  {data.duty}
                </Badge>
                {data.link && <LinkCard link={data.link} />}
              </div>
              <p className="text-muted-foreground line-clamp-3">
                {data.detail}
              </p>
            </div>
            <div className="hidden md:flex justify-end flex-wrap gap-2">
              {data.techs.map((tech: string, index: number) => {
                return <TechnologyCard key={index} tech={tech} />;
              })}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
