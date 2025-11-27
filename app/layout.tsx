import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Brokiepedia - Don't Get Brokie | Real Reviews on Brokers, Casinos & Trading Apps",
    template: "%s | Brokiepedia",
  },
  description:
    "Don't Get Brokie – Honest, independent reviews of forex brokers, crypto exchanges, online casinos, sports betting sites, and stock trading platforms. Find the best bonuses and avoid scams.",
  keywords: [
    "forex brokers",
    "crypto exchanges",
    "online casinos",
    "sports betting",
    "stock trading",
    "broker reviews",
    "casino reviews",
    "trading platforms",
    "binary options",
    "CFD trading",
  ],
  authors: [{ name: "Brokiepedia" }],
  creator: "Brokiepedia",
  publisher: "Brokiepedia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://brokiepedia.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brokiepedia.com",
    title: "Brokiepedia - Don't Get Brokie",
    description:
      "Real, honest reviews of brokers, casinos, and trading apps. Find the best platforms and avoid scams.",
    siteName: "Brokiepedia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brokiepedia - Don't Get Brokie",
    description:
      "Real, honest reviews of brokers, casinos, and trading apps. Find the best platforms and avoid scams.",
    creator: "@brokiepedia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Brokiepedia",
              url: "https://brokiepedia.com",
              logo: "https://brokiepedia.com/logo.png",
              sameAs: [
                "https://facebook.com/brokiepedia",
                "https://twitter.com/brokiepedia",
                "https://instagram.com/brokiepedia",
              ],
              description:
                "Don't Get Brokie – Honest, independent reviews of forex brokers, crypto exchanges, online casinos, and trading platforms.",
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
