"use client";

import React from "react";
import { Star, StarHalf } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showNumber?: boolean;
  className?: string;
}

/**
 * RatingStars Component
 * Displays star ratings with support for half stars
 * @param rating - The rating value (e.g., 4.7)
 * @param maxRating - Maximum rating (default: 5)
 * @param size - Size variant: sm, md, lg
 * @param showNumber - Whether to show the numeric rating
 */
export function RatingStars({
  rating,
  maxRating = 5,
  size = "md",
  showNumber = true,
  className,
}: RatingStarsProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.3 && rating % 1 < 0.8;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  const textSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex items-center">
        {/* Full stars */}
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star
            key={`full-${i}`}
            className={cn(sizeClasses[size], "fill-yellow-400 text-yellow-400")}
          />
        ))}
        
        {/* Half star */}
        {hasHalfStar && (
          <StarHalf
            className={cn(sizeClasses[size], "fill-yellow-400 text-yellow-400")}
          />
        )}
        
        {/* Empty stars */}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star
            key={`empty-${i}`}
            className={cn(sizeClasses[size], "text-gray-300")}
          />
        ))}
      </div>
      
      {showNumber && (
        <span className={cn("font-semibold text-foreground ml-1", textSizeClasses[size])}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
