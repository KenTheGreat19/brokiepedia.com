import React from "react";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Best Neobanks & Digital Cards 2025 - Brokiepedia",
  description:
    "Compare the best digital banks, neobanks, and prepaid cards. No fees, cashback rewards, and global payments.",
};

export default function BanksPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Banks & Cards" }]} />

      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Best Neobanks & Digital Cards 2025
        </h1>
        <p className="text-lg text-muted-foreground">
          Modern banking without the fees. Compare digital banks, prepaid cards, and fintech platforms.
        </p>
      </div>

      <Card>
        <CardContent className="p-12 text-center">
          <div className="text-6xl mb-4">🏦</div>
          <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
          <p className="text-muted-foreground mb-6">
            We're currently reviewing the best neobanks and digital card providers.
            Check back soon for comprehensive reviews!
          </p>
          <Badge variant="default">In Progress</Badge>
        </CardContent>
      </Card>
    </div>
  );
}
