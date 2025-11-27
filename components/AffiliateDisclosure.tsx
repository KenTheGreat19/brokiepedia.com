"use client";

import React from "react";
import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface AffiliateDisclosureProps {
  className?: string;
  variant?: "inline" | "block";
}

/**
 * AffiliateDisclosure Component
 * Required disclosure for affiliate links
 * Helps with transparency and trust
 */
export function AffiliateDisclosure({ className, variant = "block" }: AffiliateDisclosureProps) {
  if (variant === "inline") {
    return (
      <p className={cn("text-xs text-muted-foreground italic", className)}>
        * This is an affiliate link. We may earn a commission at no extra cost to you.
      </p>
    );
  }

  return (
    <div
      className={cn(
        "bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg p-4",
        className
      )}
    >
      <div className="flex gap-3">
        <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="font-semibold text-sm text-blue-900 dark:text-blue-300">
            Affiliate Disclosure
          </h4>
          <p className="text-sm text-blue-800 dark:text-blue-400 leading-relaxed">
            Brokiepedia.com is an independent review site supported by affiliate commissions. 
            When you click on links and sign up through our site, we may receive compensation 
            from brokers and casinos at no additional cost to you. This helps us provide free, 
            unbiased reviews. Our editorial opinions are our own and are not influenced by 
            affiliate partnerships.
          </p>
        </div>
      </div>
    </div>
  );
}
