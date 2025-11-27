import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ReviewCard } from "@/components/ReviewCard";
import brokersData from "@/data/brokers.json";

export const metadata: Metadata = {
  title: "Best Forex & CFD Brokers 2025 - Brokiepedia",
  description:
    "Compare the best forex and CFD brokers of 2025. Independent reviews with ratings, fees, regulation, and bonuses. Find your perfect trading platform.",
};

/**
 * Brokers Listing Page
 * Shows all brokers with filtering options
 */
export default function BrokersPage() {
  // Sort by trust score by default
  const sortedBrokers = [...brokersData].sort((a, b) => b.trustScore - a.trustScore);

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Brokers" }]} />

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Best Forex & CFD Brokers 2025
        </h1>
        <p className="text-lg text-muted-foreground">
          Compare {brokersData.length} regulated brokers. Find the lowest spreads, best platforms, and highest leverage.
        </p>
      </div>

      {/* Filters Bar */}
      <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 mb-8">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-muted-foreground" />
            <span className="font-semibold">Filter by:</span>
          </div>

          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Category
          </Button>

          <Button variant="outline" size="sm">
            Min Deposit
          </Button>

          <Button variant="outline" size="sm">
            Regulation
          </Button>

          <Button variant="outline" size="sm">
            Platform
          </Button>

          <div className="ml-auto flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <select className="px-3 py-1.5 border rounded-md text-sm bg-background">
              <option>Trust Score (High to Low)</option>
              <option>Rating (High to Low)</option>
              <option>Min Deposit (Low to High)</option>
              <option>Newest First</option>
            </select>
          </div>
        </div>
      </div>

      {/* Category Badges */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Link href="/brokers">
          <Badge variant="default" className="cursor-pointer">All Brokers</Badge>
        </Link>
        <Link href="/brokers?category=forex">
          <Badge variant="outline" className="cursor-pointer">Forex</Badge>
        </Link>
        <Link href="/brokers?category=crypto">
          <Badge variant="outline" className="cursor-pointer">Crypto</Badge>
        </Link>
        <Link href="/brokers?category=stocks">
          <Badge variant="outline" className="cursor-pointer">Stocks</Badge>
        </Link>
        <Link href="/brokers?category=cfd">
          <Badge variant="outline" className="cursor-pointer">CFDs</Badge>
        </Link>
      </div>

      {/* Broker Cards Grid */}
      <div className="space-y-6">
        {sortedBrokers.map((broker) => (
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

      {/* Bottom CTA */}
      <div className="mt-12 bg-gradient-to-r from-brand-400 to-brand-600 rounded-lg p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Can't Decide? We Can Help</h2>
        <p className="mb-6">Use our comparison tool to see brokers side-by-side</p>
        <Button variant="secondary" size="lg" asChild>
          <Link href="/compare">Compare Brokers</Link>
        </Button>
      </div>
    </div>
  );
}
