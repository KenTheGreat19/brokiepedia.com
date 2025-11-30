"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import brokersData from "@/data/brokers.json";

export default function ComparePage() {
  const [selectedBrokers, setSelectedBrokers] = useState<string[]>([
    brokersData[0].id,
    brokersData[1].id,
  ]);

  const compareData = selectedBrokers.map((id) => 
    brokersData.find((b) => b.id === id)
  ).filter(Boolean);

  const handleBrokerChange = (index: number, brokerId: string) => {
    const newSelected = [...selectedBrokers];
    newSelected[index] = brokerId;
    setSelectedBrokers(newSelected);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Compare Brokers" }]} />

      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Compare Brokers Side by Side
        </h1>
        <p className="text-lg text-muted-foreground">
          Select up to 4 brokers and compare their features, fees, and ratings
        </p>
      </div>

      {/* Broker Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[0, 1, 2, 3].map((index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <label className="text-sm font-medium mb-2 block">
                Broker {index + 1}
              </label>
              <select
                className="w-full px-3 py-2 border rounded-md bg-background"
                value={selectedBrokers[index] || ""}
                onChange={(e) => handleBrokerChange(index, e.target.value)}
              >
                <option value="">Select Broker</option>
                {brokersData.map((broker) => (
                  <option key={broker.id} value={broker.id}>
                    {broker.name}
                  </option>
                ))}
              </select>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Comparison Table */}
      {compareData.length >= 2 && (
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/5">Feature</TableHead>
                {compareData.map((broker) => (
                  <TableHead key={broker?.id} className="text-center">
                    <div className="font-bold text-base">{broker?.name}</div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Trust Score */}
              <TableRow>
                <TableCell className="font-medium">Trust Score</TableCell>
                {compareData.map((broker) => {
                  const isHighest = broker?.trustScore === Math.max(...compareData.map(b => b?.trustScore || 0));
                  return (
                    <TableCell key={broker?.id} className="text-center">
                      <Badge variant={isHighest ? "default" : "outline"}>
                        {broker?.trustScore}/100
                      </Badge>
                    </TableCell>
                  );
                })}
              </TableRow>

              {/* Rating */}
              <TableRow>
                <TableCell className="font-medium">Rating</TableCell>
                {compareData.map((broker) => {
                  const isHighest = broker?.rating === Math.max(...compareData.map(b => b?.rating || 0));
                  return (
                    <TableCell key={broker?.id} className="text-center">
                      <span className={isHighest ? "font-bold text-brand-400" : ""}>
                        {broker?.rating}/5 ⭐
                      </span>
                    </TableCell>
                  );
                })}
              </TableRow>

              {/* Min Deposit */}
              <TableRow>
                <TableCell className="font-medium">Min Deposit</TableCell>
                {compareData.map((broker) => {
                  const isLowest = broker?.minDeposit === Math.min(...compareData.map(b => b?.minDeposit || Infinity));
                  return (
                    <TableCell key={broker?.id} className="text-center">
                      <span className={isLowest ? "font-bold text-green-500" : ""}>
                        ${broker?.minDeposit}
                      </span>
                    </TableCell>
                  );
                })}
              </TableRow>

              {/* Leverage */}
              <TableRow>
                <TableCell className="font-medium">Max Leverage</TableCell>
                {compareData.map((broker) => (
                  <TableCell key={broker?.id} className="text-center">
                    {broker?.leverage}
                  </TableCell>
                ))}
              </TableRow>

              {/* Regulation */}
              <TableRow>
                <TableCell className="font-medium">Regulation</TableCell>
                {compareData.map((broker) => (
                  <TableCell key={broker?.id} className="text-center">
                    <div className="flex flex-wrap gap-1 justify-center">
                      {broker?.regulation.map((reg, i) => (
                        <Badge key={reg} variant="outline" className="text-xs">
                          {broker.regulationFlags[i]} {reg}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                ))}
              </TableRow>

              {/* EUR/USD Spread */}
              <TableRow>
                <TableCell className="font-medium">EUR/USD Spread</TableCell>
                {compareData.map((broker) => (
                  <TableCell key={broker?.id} className="text-center">
                    {broker?.tradingSpecs.spreadEURUSD}
                  </TableCell>
                ))}
              </TableRow>

              {/* Commission */}
              <TableRow>
                <TableCell className="font-medium">Commission</TableCell>
                {compareData.map((broker) => (
                  <TableCell key={broker?.id} className="text-center">
                    {broker?.tradingSpecs.commission}
                  </TableCell>
                ))}
              </TableRow>

              {/* Platforms */}
              <TableRow>
                <TableCell className="font-medium">Platforms</TableCell>
                {compareData.map((broker) => (
                  <TableCell key={broker?.id}>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {broker?.platforms.slice(0, 3).map((platform) => (
                        <Badge key={platform} variant="outline" className="text-xs">
                          {platform}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                ))}
              </TableRow>

              {/* Withdrawal Time */}
              <TableRow>
                <TableCell className="font-medium">Withdrawal Time</TableCell>
                {compareData.map((broker) => {
                  const isLowest = broker?.tradingSpecs.withdrawalTime === 
                    compareData.reduce((min, b) => {
                      const time = b?.tradingSpecs.withdrawalTime || "";
                      return !min || time < min ? time : min;
                    }, "");
                  return (
                    <TableCell key={broker?.id} className="text-center">
                      <span className={isLowest ? "font-bold text-green-500" : ""}>
                        {broker?.tradingSpecs.withdrawalTime}
                      </span>
                    </TableCell>
                  );
                })}
              </TableRow>

              {/* Welcome Bonus */}
              <TableRow>
                <TableCell className="font-medium">Welcome Bonus</TableCell>
                {compareData.map((broker) => (
                  <TableCell key={broker?.id} className="text-center">
                    <Badge variant="default" className="text-xs">
                      {broker?.welcomeBonus}
                    </Badge>
                  </TableCell>
                ))}
              </TableRow>

              {/* CTA Row */}
              <TableRow>
                <TableCell className="font-medium">Action</TableCell>
                {compareData.map((broker) => (
                  <TableCell key={broker?.id} className="text-center">
                    <Button asChild className="w-full">
                      <a href={broker?.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored">
                        Visit {broker?.name}
                      </a>
                    </Button>
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
