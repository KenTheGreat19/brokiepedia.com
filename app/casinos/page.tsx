import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ReviewCard } from "@/components/ReviewCard";
import casinosData from "@/data/casinos.json";

export const metadata: Metadata = {
  title: "Best Online Casinos & Betting Sites 2025 - Brokiepedia",
  description:
    "Compare the best online casinos and sports betting sites. Honest reviews with bonuses, payouts, game selection, and withdrawal speeds.",
};

/**
 * Casinos Listing Page
 * Shows all casinos and betting sites with filtering
 */
export default function CasinosPage() {
  // Sort by trust score by default
  const sortedCasinos = [...casinosData].sort((a, b) => b.trustScore - a.trustScore);

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Casinos & Betting" }]} />

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Best Online Casinos & Betting Sites 2025
        </h1>
        <p className="text-lg text-muted-foreground">
          Compare {casinosData.length} licensed casinos and sportsbooks. Find the biggest bonuses, fastest payouts, and most games.
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
            Type
          </Button>

          <Button variant="outline" size="sm">
            Min Deposit
          </Button>

          <Button variant="outline" size="sm">
            Payment Method
          </Button>

          <Button variant="outline" size="sm">
            Crypto Friendly
          </Button>

          <div className="ml-auto flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <select className="px-3 py-1.5 border rounded-md text-sm bg-background">
              <option>Trust Score (High to Low)</option>
              <option>Rating (High to Low)</option>
              <option>Bonus Amount (High to Low)</option>
              <option>Game Count (High to Low)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Category Badges */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Link href="/casinos">
          <Badge variant="default" className="cursor-pointer">All Sites</Badge>
        </Link>
        <Link href="/casinos?category=casino">
          <Badge variant="outline" className="cursor-pointer">Casinos</Badge>
        </Link>
        <Link href="/casinos?category=sports-betting">
          <Badge variant="outline" className="cursor-pointer">Sports Betting</Badge>
        </Link>
        <Link href="/casinos?category=poker">
          <Badge variant="outline" className="cursor-pointer">Poker</Badge>
        </Link>
        <Link href="/casinos?crypto=true">
          <Badge variant="outline" className="cursor-pointer">🪙 Crypto Friendly</Badge>
        </Link>
      </div>

      {/* Casino Cards Grid */}
      <div className="space-y-6">
        {sortedCasinos.map((casino) => (
          <ReviewCard
            key={casino.id}
            id={casino.id}
            slug={casino.slug}
            name={casino.name}
            logo={casino.logo}
            rating={casino.rating}
            trustScore={casino.trustScore}
            reviewCount={casino.reviewCount}
            minDeposit={casino.minDeposit}
            payout={casino.payout}
            regulation={casino.regulation}
            regulationFlags={casino.regulationFlags}
            welcomeBonus={casino.welcomeBonus}
            pros={casino.pros}
            cons={casino.cons}
            affiliateUrl={casino.affiliateUrl}
            type="casino"
            featured={casino.featured}
            newItem={casino.newSite}
          />
        ))}
      </div>

      {/* Responsible Gaming Notice */}
      <div className="mt-12 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-900 rounded-lg p-6">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          <span>🔞</span> Responsible Gaming
        </h3>
        <p className="text-sm text-muted-foreground">
          Gambling should be entertaining. Never bet more than you can afford to lose. 
          If you think you have a gambling problem, please visit <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" className="text-brand-400 underline">BeGambleAware.org</a> or call 1-800-GAMBLER.
        </p>
      </div>
    </div>
  );
}
