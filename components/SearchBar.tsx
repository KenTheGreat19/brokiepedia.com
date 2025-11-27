"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  onSearch?: (query: string, category: string) => void;
  className?: string;
}

/**
 * SearchBar Component
 * Main search bar with category dropdown
 * Used in hero section of homepage
 */
export function SearchBar({ onSearch, className }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query, category);
    } else {
      // Default behavior: navigate to search results
      window.location.href = `/search?q=${encodeURIComponent(query)}&category=${category}`;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex flex-col sm:flex-row gap-2 w-full max-w-3xl mx-auto",
        className
      )}
    >
      <div className="flex flex-1 bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700">
        {/* Category Dropdown */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-3 bg-transparent border-r border-slate-200 dark:border-slate-700 text-sm font-medium focus:outline-none cursor-pointer"
          aria-label="Search category"
        >
          <option value="all">All</option>
          <option value="brokers">Brokers</option>
          <option value="casinos">Casinos</option>
          <option value="trading">Trading Apps</option>
        </select>

        {/* Search Input */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for brokers, casinos, or trading apps..."
          className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-sm"
          aria-label="Search query"
        />
      </div>

      {/* Search Button */}
      <Button type="submit" size="lg" className="px-8 shadow-lg">
        <Search className="w-5 h-5 mr-2" />
        Search
      </Button>
    </form>
  );
}
