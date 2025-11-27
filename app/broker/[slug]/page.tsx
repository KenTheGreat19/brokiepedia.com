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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RatingStars } from "@/components/RatingStars";
import { TrustScoreCircle } from "@/components/TrustScoreCircle";
import { ProsCons } from "@/components/ProsCons";
import { BonusBadge } from "@/components/BonusBadge";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import brokersData from "@/data/brokers.json";

interface BrokerReviewPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return brokersData.map((broker) => ({
    slug: broker.slug,
  }));
}

export async function generateMetadata({ params }: BrokerReviewPageProps): Promise<Metadata> {
  const broker = brokersData.find((b) => b.slug === params.slug);
  
  if (!broker) {
    return {
      title: "Broker Not Found",
    };
  }

  return {
    title: `${broker.name} Review 2025 - Is It Safe? | Brokiepedia`,
    description: `${broker.name} review: Trust score ${broker.trustScore}/100, ${broker.rating}/5 stars. ${broker.overview.slice(0, 140)}...`,
  };
}

export default function BrokerReviewPage({ params }: BrokerReviewPageProps) {
  const broker = brokersData.find((b) => b.slug === params.slug);

  if (!broker) {
    notFound();
  }

  const averageScore = Math.round(
    (broker.scores.regulationSafety +
      broker.scores.fees +
      broker.scores.accountOpening +
      broker.scores.platforms +
      broker.scores.education +
      broker.scores.customerSupport) / 6
  );

  return (
    <div className="min-h-screen">
      {/* Sticky Header */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 bg-white dark:bg-slate-800 rounded-lg p-1 border">
                <Image
                  src={broker.logo}
                  alt={`${broker.name} logo`}
                  fill
                  className="object-contain p-1"
                  sizes="48px"
                />
              </div>
              <div>
                <h1 className="font-bold text-lg">{broker.name}</h1>
                <div className="flex items-center gap-2">
                  <RatingStars rating={broker.rating} size="sm" showNumber={false} />
                  <span className="text-sm text-muted-foreground">
                    {broker.rating}/5
                  </span>
                  <Separator orientation="vertical" className="h-4" />
                  <Badge variant="outline">Trust Score: {broker.trustScore}/100</Badge>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="shadow-lg" asChild>
              <a href={broker.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored">
                Visit {broker.name}
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Brokers", href: "/brokers" },
            { label: broker.name },
          ]}
        />

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Card */}
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="relative w-32 h-32 bg-white dark:bg-slate-800 rounded-lg p-4 border flex-shrink-0">
                    <Image
                      src={broker.logo}
                      alt={`${broker.name} logo`}
                      fill
                      className="object-contain p-2"
                      sizes="128px"
                    />
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h1 className="text-3xl font-bold mb-2">{broker.name} Review</h1>
                      <div className="flex items-center gap-4 mb-3">
                        <RatingStars rating={broker.rating} size="lg" />
                        <span className="text-muted-foreground">
                          ({broker.reviewCount.toLocaleString()} reviews)
                        </span>
                      </div>
                      {broker.welcomeBonus && <BonusBadge bonus={broker.welcomeBonus} size="lg" />}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {broker.regulation.map((reg, i) => (
                        <Badge key={reg} variant="outline">
                          {broker.regulationFlags[i]} {reg}
                        </Badge>
                      ))}
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {broker.overview}
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
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Regulation & Safety</span>
                      <span className="font-bold text-brand-400">{broker.scores.regulationSafety}/100</span>
                    </div>
                    <Progress value={broker.scores.regulationSafety} />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Fees & Spreads</span>
                      <span className="font-bold text-brand-400">{broker.scores.fees}/100</span>
                    </div>
                    <Progress value={broker.scores.fees} />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Account Opening</span>
                      <span className="font-bold text-brand-400">{broker.scores.accountOpening}/100</span>
                    </div>
                    <Progress value={broker.scores.accountOpening} />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Trading Platforms</span>
                      <span className="font-bold text-brand-400">{broker.scores.platforms}/100</span>
                    </div>
                    <Progress value={broker.scores.platforms} />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Education & Research</span>
                      <span className="font-bold text-brand-400">{broker.scores.education}/100</span>
                    </div>
                    <Progress value={broker.scores.education} />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Customer Support</span>
                      <span className="font-bold text-brand-400">{broker.scores.customerSupport}/100</span>
                    </div>
                    <Progress value={broker.scores.customerSupport} />
                  </div>

                  <Separator className="my-4" />

                  <div className="bg-brand-400/10 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">Overall Trust Score</span>
                      <span className="font-bold text-2xl text-brand-400">{broker.trustScore}/100</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pros & Cons */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Pros & Cons</h2>
                <ProsCons pros={broker.pros} cons={broker.cons} layout="grid" />
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
                      <TableCell>{broker.established}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Headquarters</TableCell>
                      <TableCell>{broker.headquarters}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Regulation</TableCell>
                      <TableCell>{broker.regulation.join(", ")}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Min Deposit</TableCell>
                      <TableCell>${broker.minDeposit}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Max Leverage</TableCell>
                      <TableCell>{broker.leverage}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Platforms</TableCell>
                      <TableCell>{broker.platforms.join(", ")}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">EUR/USD Spread</TableCell>
                      <TableCell>{broker.tradingSpecs.spreadEURUSD}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Withdrawal Time</TableCell>
                      <TableCell>{broker.tradingSpecs.withdrawalTime}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Detailed Tabs */}
            <Card>
              <CardContent className="p-6">
                <Tabs defaultValue="fees" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="fees">Fees</TabsTrigger>
                    <TabsTrigger value="platforms">Platforms</TabsTrigger>
                    <TabsTrigger value="deposit">Payments</TabsTrigger>
                    <TabsTrigger value="bonuses">Bonuses</TabsTrigger>
                  </TabsList>

                  <TabsContent value="fees" className="space-y-4 mt-4">
                    <h3 className="text-xl font-bold">Fees & Spreads</h3>
                    <div className="prose-custom">
                      <p>EUR/USD Spread: <strong>{broker.tradingSpecs.spreadEURUSD}</strong></p>
                      <p>Commission: <strong>{broker.tradingSpecs.commission}</strong></p>
                      <p>{broker.name} offers competitive pricing suitable for both beginners and professional traders.</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="platforms" className="space-y-4 mt-4">
                    <h3 className="text-xl font-bold">Trading Platforms</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {broker.platforms.map((platform) => (
                        <Badge key={platform} variant="outline">{platform}</Badge>
                      ))}
                    </div>
                    <p className="text-muted-foreground">
                      {broker.name} provides access to industry-leading trading platforms with advanced charting tools, 
                      one-click trading, and full mobile support.
                    </p>
                  </TabsContent>

                  <TabsContent value="deposit" className="space-y-4 mt-4">
                    <h3 className="text-xl font-bold">Deposit & Withdrawal</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Deposit Methods</h4>
                        <div className="flex flex-wrap gap-2">
                          {broker.tradingSpecs.depositMethods.map((method) => (
                            <Badge key={method} variant="outline">{method}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Withdrawal Methods</h4>
                        <div className="flex flex-wrap gap-2">
                          {broker.tradingSpecs.withdrawalMethods.map((method) => (
                            <Badge key={method} variant="outline">{method}</Badge>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Average withdrawal time: {broker.tradingSpecs.withdrawalTime}
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="bonuses" className="space-y-4 mt-4">
                    <h3 className="text-xl font-bold">Welcome Bonus & Promotions</h3>
                    {broker.welcomeBonus && (
                      <div className="bg-brand-400/10 border border-brand-400/20 rounded-lg p-4">
                        <BonusBadge bonus={broker.welcomeBonus} size="lg" className="mb-3" />
                        <p className="text-sm text-muted-foreground">
                          New clients are eligible for this exclusive welcome offer. Terms and conditions apply.
                        </p>
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
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
                  {broker.verdict}
                </p>
                <Button size="lg" className="w-full shadow-lg" asChild>
                  <a href={broker.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored">
                    Visit {broker.name} Now
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
                  {broker.faqs.map((faq, index) => (
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

            {/* Affiliate Disclosure */}
            <AffiliateDisclosure />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trust Score Card */}
            <Card className="sticky top-32">
              <CardContent className="p-6 text-center">
                <TrustScoreCircle score={broker.trustScore} size="xl" />
                <Separator className="my-4" />
                <div className="space-y-2 text-left">
                  <p className="text-sm">
                    <span className="font-semibold">Last Updated:</span>{" "}
                    {new Date(broker.lastUpdated).toLocaleDateString()}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Category:</span>{" "}
                    {broker.category.toUpperCase()}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Min Deposit:</span> ${broker.minDeposit}
                  </p>
                </div>
                <Button className="w-full mt-4" size="lg" asChild>
                  <a href={broker.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored">
                    Visit Site
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Related Reviews */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Related Reviews</h3>
                <div className="space-y-3">
                  {brokersData
                    .filter((b) => b.id !== broker.id && b.category === broker.category)
                    .slice(0, 3)
                    .map((b) => (
                      <Link
                        key={b.id}
                        href={`/broker/${b.slug}`}
                        className="block p-3 rounded-lg hover:bg-accent transition-colors"
                      >
                        <p className="font-semibold">{b.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <RatingStars rating={b.rating} size="sm" showNumber={false} />
                          <span className="text-xs text-muted-foreground">
                            {b.rating}/5
                          </span>
                        </div>
                      </Link>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
