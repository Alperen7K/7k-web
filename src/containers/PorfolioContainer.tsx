import React from "react";
import PortfolioCard from "@/components/PortfolioCard";
import { PortfolioData, PortfolioDataType } from "@/models/portfolio";

export default function PorfolioContainer() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {PortfolioData.map((portfolio: PortfolioDataType, index: number) => {
        return <PortfolioCard key={index} data={portfolio} />;
      })}
    </div>
  );
}
