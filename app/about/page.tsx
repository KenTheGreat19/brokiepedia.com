import React from "react";
import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Mail, Users, Target, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "About Brokiepedia - Don't Get Brokie",
  description: "Learn about Brokiepedia's mission to provide honest, independent reviews of brokers, casinos, and trading platforms.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "About Us" }]} />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Brokiepedia</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Don&apos;t Get Brokie – Our mission is to protect traders and gamblers from scams
        </p>

        <div className="prose prose-lg max-w-none mb-12">
          <p>
            Founded in 2025, Brokiepedia was born from a simple frustration: too many people were
            losing money to unregulated brokers and shady online casinos. We saw friends, family,
            and community members fall victim to platforms that promised the world but delivered nothing.
          </p>

          <p>
            Our motto, <strong>&quot;Don&apos;t Get Brokie,&quot;</strong> is more than just a catchy phrase. It&apos;s a
            commitment to keep you financially safe by providing brutally honest, independent reviews
            of every broker, casino, and trading platform we cover.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-brand-400/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-brand-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                Provide 100% independent, unbiased reviews to help traders and gamblers make
                informed decisions and avoid scams.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-brand-400/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-brand-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Values</h3>
              <p className="text-muted-foreground">
                Transparency, honesty, and user protection above all. We disclose all affiliate
                relationships and never let them influence our reviews.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-brand-400/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-brand-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Community</h3>
              <p className="text-muted-foreground">
                50,000+ monthly users trust Brokiepedia for honest reviews and the latest bonus offers.
                Join our growing community.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-brand-400/10 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-brand-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Contact Us</h3>
              <p className="text-muted-foreground">
                Have questions or want to report a broker? Email us at{" "}
                <a href="mailto:hello@brokiepedia.com" className="text-brand-400 underline">
                  hello@brokiepedia.com
                </a>
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-slate-50 dark:bg-slate-900">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">How We Review</h2>
            <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
              <li>We test every platform with real money deposits</li>
              <li>We verify regulation and licensing with official authorities</li>
              <li>We analyze fees, spreads, and withdrawal times</li>
              <li>We test customer support response times</li>
              <li>We aggregate user reviews from multiple sources</li>
              <li>We update reviews quarterly to reflect changes</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
