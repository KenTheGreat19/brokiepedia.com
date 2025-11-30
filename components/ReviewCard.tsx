"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RatingStars } from "./RatingStars";
import { TrustScoreCircle } from "./TrustScoreCircle";
import { ProsCons } from "./ProsCons";
import type { ReviewCardProps } from "@/types";

/**
 * ReviewCard Component
 * Main reusable component for displaying broker/casino reviews
 * Used throughout homepage, listing pages, and sidebars
 * Features: rating, trust score, specs, pros/cons, CTAs
 */
export function ReviewCard({
  id,
  slug,
  name,
  logo,
  rating,
  trustScore,
  reviewCount,
  minDeposit,
  leverage,
  payout,
  regulation,
  regulationFlags,
  welcomeBonus,
  pros,
  cons,
  affiliateUrl,
  type,
  featured = false,
  newItem = false,
}: ReviewCardProps) {
  const basePath = type === "broker" ? "/broker" : "/casino";

  return (
    <Card className="card-hover relative overflow-hidden group">
      {/* Featured / New Badge */}
      {(featured || newItem) && (
        <div className="absolute top-4 right-4 z-10">
          {featured && <Badge variant="default">Featured</Badge>}
          {newItem && <Badge variant="warning" className="ml-2">New</Badge>}
        </div>
      )}

      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left: Logo + Trust Score */}
          <div className="flex flex-col items-center gap-4 md:w-32 flex-shrink-0">
            <div className="relative w-24 h-24 bg-white dark:bg-slate-800 rounded-lg p-2 shadow-sm border">
              <Image
                src={logo}
                alt={`${name} logo`}
                fill
                className="object-contain p-2"
                sizes="96px"
              />
            </div>
            <TrustScoreCircle score={trustScore} size="md" />
          </div>

          {/* Middle: Details */}
          <div className="flex-1 space-y-4">
            {/* Header */}
            <div>
              <Link href={`${basePath}/${slug}`}>
                <h3 className="text-xl font-bold hover:text-brand-400 transition-colors">
                  {name}
                </h3>
              </Link>
              <div className="flex items-center gap-3 mt-2">
                <RatingStars rating={rating} size="md" />
                <span className="text-sm text-muted-foreground">
                  ({reviewCount.toLocaleString()} reviews)
                </span>
              </div>
            </div>

            {/* Key Specs */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="font-normal">
                <span className="font-semibold mr-1">Min Deposit:</span>
                ${minDeposit}
              </Badge>
              
              {leverage && (
                <Badge variant="outline" className="font-normal">
                  <span className="font-semibold mr-1">Leverage:</span>
                  {leverage}
                </Badge>
              )}
              
              {payout && (
                <Badge variant="outline" className="font-normal">
                  <span className="font-semibold mr-1">Payout:</span>
                  {payout}
                </Badge>
              )}
              
              <Badge variant="outline" className="font-normal">
                <span className="font-semibold mr-1">Regulation:</span>
                {regulationFlags.join(" ")} {regulation.join(", ")}
              </Badge>
            </div>

            {/* Welcome Bonus */}
            {welcomeBonus && (
              <div className="bg-brand-400/10 border border-brand-400/20 rounded-lg p-3">
                <p className="text-sm font-semibold text-brand-600 dark:text-brand-400">
                  🎁 {welcomeBonus}
                </p>
              </div>
            )}

            {/* Pros & Cons */}
            <ProsCons 
              pros={pros.slice(0, 3)} 
              cons={cons.slice(0, 2)} 
              layout="grid" 
            />
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex gap-3">
        <Button variant="outline" asChild className="flex-1">
          <Link href={`${basePath}/${slug}`}>
            Read Review
          </Link>
        </Button>
        <Button asChild className="flex-1 group">
          <a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            onClick={() => {
              // Track affiliate click
              const windowWithGtag = window as typeof window & { gtag?: (event: string, action: string, details: Record<string, string>) => void };
              if (typeof window !== "undefined" && windowWithGtag.gtag) {
                windowWithGtag.gtag("event", "affiliate_click", {
                  broker_name: name,
                  broker_id: id,
                });
              }
            }}
          >
            Visit Site
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
