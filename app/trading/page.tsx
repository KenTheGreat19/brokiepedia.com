import React from "react";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ReviewCard } from "@/components/ReviewCard";
import brokersData from "@/data/brokers.json";

export const metadata: Metadata = {
  title: "Best Stock & Crypto Trading Apps 2025 - Brokiepedia",
  description:
    "Compare the best stock trading and crypto exchange platforms. Zero commissions, mobile apps, and instant execution.",
};

export default function TradingPage() {
  // Filter for stock and crypto brokers
  const tradingPlatforms = brokersData.filter(
    (b) => b.category === "stocks" || b.category === "crypto"
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Trading Apps" }]} />

      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Best Stock & Crypto Trading Apps 2025
        </h1>
        <p className="text-lg text-muted-foreground">
          Trade stocks, ETFs, and cryptocurrencies with zero commissions and user-friendly mobile apps.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <Badge variant="default">All Platforms</Badge>
        <Badge variant="outline" className="cursor-pointer">Stocks</Badge>
        <Badge variant="outline" className="cursor-pointer">Crypto</Badge>
        <Badge variant="outline" className="cursor-pointer">ETFs</Badge>
        <Badge variant="outline" className="cursor-pointer">Options</Badge>
      </div>

      <div className="space-y-6">
        {tradingPlatforms.map((broker) => (
          <ReviewCard
            key={broker.id}
            id={broker.id}
            slug={broker.slug}
            name={broker.name}
            logo={broker.logo}
            rating={broker.rating}
            trustScore={broker.trustScore}
            reviewCount={broker.reviewCount}
            minDeposit={broker.minDeposit}
            leverage={broker.leverage}
            regulation={broker.regulation}
            regulationFlags={broker.regulationFlags}
            welcomeBonus={broker.welcomeBonus}
            pros={broker.pros}
            cons={broker.cons}
            affiliateUrl={broker.affiliateUrl}
            type="broker"
            featured={broker.featured}
            newItem={broker.newBroker}
          />
        ))}
      </div>
    </div>
  );
}
