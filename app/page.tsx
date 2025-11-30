import React from "react";
import Link from "next/link";
import { 
  TrendingUp, 
  Bitcoin, 
  Trophy, 
  LineChart, 
  Sparkles, 
  BarChart, 
  CreditCard, 
  Briefcase,
  Shield,
  CheckCircle,
  Clock,
  Users,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/SearchBar";
import { ReviewCard } from "@/components/ReviewCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import brokersData from "@/data/brokers.json";
import casinosData from "@/data/casinos.json";
import categoriesData from "@/data/categories.json";

/**
 * Homepage - Main landing page
 * Sections: Hero, Trust Badges, Categories, Top Rated, Latest Reviews, Newsletter
 */
export default function HomePage() {
  // Get featured and recent items
  const featuredBrokers = brokersData
    .filter(b => b.featured)
    .sort((a, b) => b.trustScore - a.trustScore)
    .slice(0, 3);
  
  const topRatedBrokers = brokersData
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);
  
  const topRatedCasinos = casinosData
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  const latestReviews = [...brokersData, ...casinosData]
    .sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())
    .slice(0, 6);

  const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    TrendingUp,
    Bitcoin,
    Trophy,
    LineChart,
    Sparkles,
    BarChart,
    CreditCard,
    Briefcase,
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="gradient-hero py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">
            50,000+ Users Trust Brokiepedia
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Don&apos;t Get Brokie
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Real Reviews on Brokers, Casinos &amp; Trading Apps
            <br />
            <span className="text-lg">100% Independent • Updated 2025 • Zero Scams</span>
          </p>

          <SearchBar />

          {/* Featured Brokers Preview */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredBrokers.map((broker) => (
              <Card key={broker.id} className="card-hover bg-white dark:bg-slate-800">
                <CardContent className="p-6 text-left">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg">{broker.name}</h3>
                    <Badge>{broker.trustScore}/100</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {broker.overview.slice(0, 120)}...
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={`/broker/${broker.slug}`}>View Review</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Authority Section */}
      <section className="py-12 border-b bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mb-3">
                <span className="text-2xl">🔞</span>
              </div>
              <h3 className="font-semibold text-sm">18+ Only</h3>
              <p className="text-xs text-muted-foreground mt-1">Responsible Gaming</p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold text-sm">100% Independent</h3>
              <p className="text-xs text-muted-foreground mt-1">Unbiased Reviews</p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-sm">Verified Licenses</h3>
              <p className="text-xs text-muted-foreground mt-1">Regulated Only</p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-3">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-sm">50k+ Users</h3>
              <p className="text-xs text-muted-foreground mt-1">Active Monthly</p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="font-semibold text-sm">Updated 2025</h3>
              <p className="text-xs text-muted-foreground mt-1">Fresh Data</p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-3">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-semibold text-sm">Affiliate Disclosure</h3>
              <p className="text-xs text-muted-foreground mt-1">Transparent</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-muted-foreground">
              Find the perfect platform for your needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categoriesData.map((category) => {
              const Icon = iconMap[category.icon] || TrendingUp;
              return (
                <Link
                  key={category.id}
                  href={`/category/${category.slug}`}
                  className="group"
                >
                  <Card className="card-hover h-full">
                    <CardContent className="p-6 text-center">
                      <div
                        className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                        style={{ backgroundColor: `${category.color}20` }}
                      >
                        <Icon
                          className="w-8 h-8"
                          style={{ color: category.color }}
                        />
                      </div>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-brand-400 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {category.description.slice(0, 60)}...
                      </p>
                      <Badge variant="outline">{category.count} Platforms</Badge>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Top Rated This Month - Brokers */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Top Rated Brokers This Month
              </h2>
              <p className="text-lg text-muted-foreground">
                The highest-rated brokers based on our comprehensive scoring system
              </p>
            </div>
            <Button variant="outline" asChild className="hidden md:flex">
              <Link href="/brokers">
                View All
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {topRatedBrokers.slice(0, 4).map((broker) => (
              <ReviewCard
                key={broker.id}
                id={broker.id}
                slug={broker.slug}
                name={broker.name}
                logo={broker.logo}
                rating={broker.rating}
                trustScore={broker.trustScore}
                reviewCount={broker.reviewCount}
                minDeposit={broker.minDeposit}
                leverage={broker.leverage}
                regulation={broker.regulation}
                regulationFlags={broker.regulationFlags}
                welcomeBonus={broker.welcomeBonus}
                pros={broker.pros}
                cons={broker.cons}
                affiliateUrl={broker.affiliateUrl}
                type="broker"
                featured={broker.featured}
                newItem={broker.newBroker}
              />
            ))}
          </div>

          <div className="mt-6 text-center md:hidden">
            <Button asChild>
              <Link href="/brokers">View All Brokers</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Top Rated Casinos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Best Online Casinos & Betting Sites
              </h2>
              <p className="text-lg text-muted-foreground">
                Highest payouts, fastest withdrawals, and biggest bonuses
              </p>
            </div>
            <Button variant="outline" asChild className="hidden md:flex">
              <Link href="/casinos">
                View All
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {topRatedCasinos.map((casino) => (
              <ReviewCard
                key={casino.id}
                id={casino.id}
                slug={casino.slug}
                name={casino.name}
                logo={casino.logo}
                rating={casino.rating}
                trustScore={casino.trustScore}
                reviewCount={casino.reviewCount}
                minDeposit={casino.minDeposit}
                payout={casino.payout}
                regulation={casino.regulation}
                regulationFlags={casino.regulationFlags}
                welcomeBonus={casino.welcomeBonus}
                pros={casino.pros}
                cons={casino.cons}
                affiliateUrl={casino.affiliateUrl}
                type="casino"
                featured={casino.featured}
                newItem={casino.newSite}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Tool Teaser */}
      <section className="py-16 bg-gradient-to-r from-brand-400 to-brand-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not Sure Which Broker to Choose?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Compare up to 4 brokers side-by-side and find your perfect match
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/compare">
              Compare Brokers Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Latest Reviews */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest Reviews
            </h2>
            <p className="text-lg text-muted-foreground">
              Fresh, up-to-date reviews to help you make informed decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestReviews.map((item) => {
              const isCasino = "payout" in item;
              return (
                <Card key={item.id} className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="success">New Review</Badge>
                      <span className="text-xs text-muted-foreground">
                        {new Date(item.lastUpdated).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="font-bold text-xl mb-2">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {item.overview.slice(0, 100)}...
                    </p>
                    <Button variant="outline" asChild className="w-full">
                      <Link href={`/${isCasino ? "casino" : "broker"}/${item.slug}`}>
                        Read Full Review
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-brand-400 flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">📬</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get the Best Bonuses Before They Expire
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join 50,000+ traders and gamblers getting exclusive bonuses, tips, and alerts straight to their inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
