import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RatingStars } from "@/components/RatingStars";
import { TrustScoreCircle } from "@/components/TrustScoreCircle";
import { ProsCons } from "@/components/ProsCons";
import { BonusBadge } from "@/components/BonusBadge";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import casinosData from "@/data/casinos.json";

interface CasinoReviewPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return casinosData.map((casino) => ({
    slug: casino.slug,
  }));
}

export async function generateMetadata({ params }: CasinoReviewPageProps): Promise<Metadata> {
  const casino = casinosData.find((c) => c.slug === params.slug);
  
  if (!casino) {
    return {
      title: "Casino Not Found",
    };
  }

  return {
    title: `${casino.name} Review 2025 - ${casino.rating}/5 Stars | Brokiepedia`,
    description: `${casino.name} review: Trust score ${casino.trustScore}/100. ${casino.overview.slice(0, 140)}...`,
  };
}

export default function CasinoReviewPage({ params }: CasinoReviewPageProps) {
  const casino = casinosData.find((c) => c.slug === params.slug);

  if (!casino) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Sticky Header */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 bg-white dark:bg-slate-800 rounded-lg p-1 border">
                <Image
                  src={casino.logo}
                  alt={`${casino.name} logo`}
                  fill
                  className="object-contain p-1"
                  sizes="48px"
                />
              </div>
              <div>
                <h1 className="font-bold text-lg">{casino.name}</h1>
                <div className="flex items-center gap-2">
                  <RatingStars rating={casino.rating} size="sm" showNumber={false} />
                  <span className="text-sm text-muted-foreground">{casino.rating}/5</span>
                  <Separator orientation="vertical" className="h-4" />
                  <Badge variant="outline">Trust: {casino.trustScore}/100</Badge>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="shadow-lg" asChild>
              <a href={casino.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored">
                Claim Bonus
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Casinos", href: "/casinos" },
            { label: casino.name },
          ]}
        />

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Card */}
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="relative w-32 h-32 bg-white dark:bg-slate-800 rounded-lg p-4 border flex-shrink-0">
                    <Image
                      src={casino.logo}
                      alt={`${casino.name} logo`}
                      fill
                      className="object-contain p-2"
                      sizes="128px"
                    />
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h1 className="text-3xl font-bold mb-2">{casino.name} Review</h1>
                      <div className="flex items-center gap-4 mb-3">
                        <RatingStars rating={casino.rating} size="lg" />
                        <span className="text-muted-foreground">
                          ({casino.reviewCount.toLocaleString()} reviews)
                        </span>
                      </div>
                      {casino.welcomeBonus && <BonusBadge bonus={casino.welcomeBonus} size="lg" />}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {casino.regulation.map((reg, i) => (
                        <Badge key={reg} variant="outline">
                          {casino.regulationFlags[i]} {reg}
                        </Badge>
                      ))}
                      {casino.specs.cryptoFriendly && (
                        <Badge variant="default">🪙 Crypto Friendly</Badge>
                      )}
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {casino.overview}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rating Breakdown */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Detailed Rating Breakdown</h2>
                
                <div className="space-y-4">
                  {Object.entries(casino.scores).map(([key, value]) => (
                    <div key={key}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </span>
                        <span className="font-bold text-brand-400">{value}/100</span>
                      </div>
                      <Progress value={value} />
                    </div>
                  ))}

                  <Separator className="my-4" />

                  <div className="bg-brand-400/10 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">Overall Trust Score</span>
                      <span className="font-bold text-2xl text-brand-400">{casino.trustScore}/100</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pros & Cons */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Pros & Cons</h2>
                <ProsCons pros={casino.pros} cons={casino.cons} layout="grid" />
              </CardContent>
            </Card>

            {/* At a Glance */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">At a Glance</h2>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Established</TableCell>
                      <TableCell>{casino.established}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">License</TableCell>
                      <TableCell>{casino.regulation.join(", ")}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Min Deposit</TableCell>
                      <TableCell>${casino.minDeposit}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">RTP/Payout</TableCell>
                      <TableCell>{casino.payout}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Total Games</TableCell>
                      <TableCell>{casino.specs.slots + casino.specs.liveDealer}+</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Withdrawal Time</TableCell>
                      <TableCell>{casino.specs.withdrawalTime}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Sportsbook</TableCell>
                      <TableCell>{casino.specs.sportsbook ? "Yes" : "No"}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Verdict */}
            <Card className="bg-gradient-to-br from-brand-400/10 to-brand-600/10 border-brand-400/20">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-brand-400" />
                  Our Verdict
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  {casino.verdict}
                </p>
                <Button size="lg" className="w-full shadow-lg" asChild>
                  <a href={casino.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored">
                    Claim Bonus at {casino.name}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                  {casino.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Responsible Gaming Warning */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-900 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <span>🔞</span> Responsible Gaming
              </h3>
              <p className="text-sm text-muted-foreground">
                Gambling should be entertaining. Never bet more than you can afford to lose. 
                If you think you have a gambling problem, visit BeGambleAware.org or call 1-800-GAMBLER.
              </p>
            </div>

            <AffiliateDisclosure />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-32">
              <CardContent className="p-6 text-center">
                <TrustScoreCircle score={casino.trustScore} size="xl" />
                <Separator className="my-4" />
                <div className="space-y-2 text-left">
                  <p className="text-sm">
                    <span className="font-semibold">Last Updated:</span>{" "}
                    {new Date(casino.lastUpdated).toLocaleDateString()}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Games:</span>{" "}
                    {casino.specs.slots + casino.specs.liveDealer}+
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Min Deposit:</span> ${casino.minDeposit}
                  </p>
                </div>
                <Button className="w-full mt-4" size="lg" asChild>
                  <a href={casino.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored">
                    Claim Bonus
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
