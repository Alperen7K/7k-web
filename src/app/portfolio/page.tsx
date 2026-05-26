import React from "react";
import PorfolioContainer from "@/containers/PorfolioContainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Title } from "@/components/Title";

export default function Portfolio() {
  return (
    <section className="pb-16 pt-28">
      <div className="w-[95vw] sm:w-[83vw] max-w-[1400px] mx-auto space-y-8">
        <Title title="Portfolio" />

        <PorfolioContainer />
      </div>
    </section>
  );
}
