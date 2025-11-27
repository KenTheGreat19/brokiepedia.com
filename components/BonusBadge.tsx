"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Gift } from "lucide-react";
import { cn } from "@/lib/utils";

interface BonusBadgeProps {
  bonus: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

/**
 * BonusBadge Component
 * Eye-catching badge for welcome bonuses and promotions
 * Examples: "Up to $10,000", "200% Bonus", "50 Free Spins"
 */
export function BonusBadge({ bonus, size = "md", className }: BonusBadgeProps) {
  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5",
    lg: "text-base px-4 py-2",
  };

  return (
    <Badge
      variant="default"
      className={cn(
        "bg-gradient-to-r from-brand-400 to-brand-600 hover:from-brand-500 hover:to-brand-700",
        "text-white font-semibold flex items-center gap-1.5 shadow-md",
        sizeClasses[size],
        className
      )}
    >
      <Gift className="w-3 h-3" />
      {bonus}
    </Badge>
  );
}
