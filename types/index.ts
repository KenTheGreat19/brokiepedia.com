export interface Broker {
  id: string;
  slug: string;
  name: string;
  logo: string;
  rating: number;
  trustScore: number;
  reviewCount: number;
  minDeposit: number;
  leverage: string;
  regulation: string[];
  regulationFlags: string[];
  welcomeBonus: string;
  established: number;
  headquarters: string;
  platforms: string[];
  accountTypes: string[];
  category: "forex" | "crypto" | "stocks" | "cfd" | "prop";
  
  // Detailed scores
  scores: {
    regulationSafety: number;
    fees: number;
    accountOpening: number;
    platforms: number;
    education: number;
    customerSupport: number;
  };
  
  // Pros and Cons
  pros: string[];
  cons: string[];
  
  // Trading specs
  tradingSpecs: {
    spreadEURUSD: string;
    commission: string;
    cryptocurrencies: number;
    forexPairs: number;
    stocks: number;
    cfds: number;
    withdrawalTime: string;
    depositMethods: string[];
    withdrawalMethods: string[];
  };
  
  // Content
  overview: string;
  verdict: string;
  
  // Metadata
  featured: boolean;
  newBroker: boolean;
  lastUpdated: string;
  affiliateUrl: string;
  
  // FAQ
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface Casino {
  id: string;
  slug: string;
  name: string;
  logo: string;
  rating: number;
  trustScore: number;
  reviewCount: number;
  minDeposit: number;
  payout: string;
  regulation: string[];
  regulationFlags: string[];
  welcomeBonus: string;
  established: number;
  headquarters: string;
  category: "casino" | "sports-betting" | "poker";
  
  scores: {
    regulationSafety: number;
    bonuses: number;
    gameSelection: number;
    mobileExperience: number;
    withdrawalSpeed: number;
    customerSupport: number;
  };
  
  pros: string[];
  cons: string[];
  
  specs: {
    slots: number;
    liveDealer: number;
    sportsbook: boolean;
    cryptoFriendly: boolean;
    withdrawalTime: string;
    paymentMethods: string[];
  };
  
  overview: string;
  verdict: string;
  
  featured: boolean;
  newSite: boolean;
  lastUpdated: string;
  affiliateUrl: string;
  
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  count: number;
  color: string;
}

export interface ReviewCardProps {
  id: string;
  slug: string;
  name: string;
  logo: string;
  rating: number;
  trustScore: number;
  reviewCount: number;
  minDeposit: number;
  leverage?: string;
  payout?: string;
  regulation: string[];
  regulationFlags: string[];
  welcomeBonus: string;
  pros: string[];
  cons: string[];
  affiliateUrl: string;
  type: "broker" | "casino";
  featured?: boolean;
  newItem?: boolean;
}
