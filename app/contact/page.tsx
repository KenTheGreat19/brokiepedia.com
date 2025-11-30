import React from "react";
import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Mail, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us - Brokiepedia",
  description: "Get in touch with the Brokiepedia team. Report a broker, suggest a review, or ask questions.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Contact" }]} />

      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-muted-foreground mb-12">
          We&apos;d love to hear from you. Send us a message and we&apos;ll respond within 24 hours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-brand-400/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-brand-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">
                For general inquiries and support
              </p>
              <a
                href="mailto:hello@brokiepedia.com"
                className="text-brand-400 font-semibold hover:underline"
              >
                hello@brokiepedia.com
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-brand-400/10 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-brand-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Report a Broker</h3>
              <p className="text-muted-foreground mb-4">
                Experienced a scam? Let us know
              </p>
              <a
                href="mailto:report@brokiepedia.com"
                className="text-brand-400 font-semibold hover:underline"
              >
                report@brokiepedia.com
              </a>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-400"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-400">
                  <option>General Inquiry</option>
                  <option>Report a Broker/Casino</option>
                  <option>Suggest a Review</option>
                  <option>Partnership/Advertising</option>
                  <option>Technical Issue</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-400"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
