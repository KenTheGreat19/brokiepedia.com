"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Breadcrumb Component
 * SEO-friendly navigation breadcrumbs
 * Automatically includes home link
 */
export function Breadcrumb({ items, className }: BreadcrumbProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className={cn("py-4", className)}>
      <ol className="flex items-center gap-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          const position = index + 1;

          return (
            <li
              key={index}
              className="flex items-center gap-2"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {item.href && !isLast ? (
                <>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-brand-400 transition-colors flex items-center gap-1"
                    itemProp="item"
                  >
                    {index === 0 && <Home className="w-4 h-4" />}
                    <span itemProp="name">{item.label}</span>
                  </Link>
                  <meta itemProp="position" content={position.toString()} />
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </>
              ) : (
                <>
                  <span
                    className={cn(
                      "flex items-center gap-1",
                      isLast ? "text-foreground font-medium" : "text-muted-foreground"
                    )}
                    itemProp="name"
                  >
                    {index === 0 && <Home className="w-4 h-4" />}
                    {item.label}
                  </span>
                  <meta itemProp="position" content={position.toString()} />
                  {!isLast && <ChevronRight className="w-4 h-4 text-muted-foreground" />}
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
