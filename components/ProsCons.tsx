"use client";

import React from "react";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProsConsProps {
  pros: string[];
  cons: string[];
  className?: string;
  layout?: "grid" | "stack";
}

/**
 * ProsCons Component
 * Displays pros and cons in a visually appealing grid or stacked layout
 * Used in review cards and detail pages
 */
export function ProsCons({ pros, cons, className, layout = "grid" }: ProsConsProps) {
  const isGrid = layout === "grid";

  return (
    <div
      className={cn(
        isGrid ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "flex flex-col gap-4",
        className
      )}
    >
      {/* Pros Section */}
      <div className="space-y-2">
        <h4 className="font-semibold text-sm text-green-600 dark:text-green-400 flex items-center gap-2">
          <Check className="w-4 h-4" />
          Pros
        </h4>
        <ul className="space-y-2">
          {pros.map((pro, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">{pro}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Cons Section */}
      <div className="space-y-2">
        <h4 className="font-semibold text-sm text-red-600 dark:text-red-400 flex items-center gap-2">
          <X className="w-4 h-4" />
          Cons
        </h4>
        <ul className="space-y-2">
          {cons.map((con, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">{con}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
