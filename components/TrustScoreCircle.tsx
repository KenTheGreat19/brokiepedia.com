"use client";

import React from "react";
import { cn, getTrustScoreColor } from "@/lib/utils";

interface TrustScoreCircleProps {
  score: number;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showLabel?: boolean;
}

/**
 * TrustScoreCircle Component
 * Displays a circular progress indicator for trust scores (0-100)
 * Uses conic gradient for smooth visual progress
 */
export function TrustScoreCircle({
  score,
  size = "md",
  className,
  showLabel = true,
}: TrustScoreCircleProps) {
  const clampedScore = Math.max(0, Math.min(100, score));
  const scoreDegrees = (clampedScore / 100) * 360;

  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
    xl: "w-24 h-24",
  };

  const textSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
    xl: "text-lg",
  };

  const numberSizeClasses = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
  };

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <div
        className={cn(
          "rounded-full flex items-center justify-center relative",
          sizeClasses[size]
        )}
        style={{
          background: `conic-gradient(
            from 0deg,
            #00D4A1 0deg,
            #00D4A1 ${scoreDegrees}deg,
            #e5e7eb ${scoreDegrees}deg,
            #e5e7eb 360deg
          )`,
          padding: "4px",
        }}
      >
        <div className="w-full h-full rounded-full bg-background dark:bg-card flex items-center justify-center">
          <div className="flex flex-col items-center">
            <span className={cn("font-bold", getTrustScoreColor(score), numberSizeClasses[size])}>
              {clampedScore}
            </span>
          </div>
        </div>
      </div>
      
      {showLabel && (
        <span className={cn("font-medium text-muted-foreground", textSizeClasses[size])}>
          Trust Score
        </span>
      )}
    </div>
  );
}
