import React from "react";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy - Brokiepedia",
  description: "Brokiepedia's privacy policy. Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Privacy Policy" }]} />

      <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
        <h1>Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: November 28, 2025</p>

        <h2>1. Information We Collect</h2>
        <p>
          Brokiepedia ("we," "us," or "our") collects information that you provide directly to us when you:
        </p>
        <ul>
          <li>Subscribe to our newsletter</li>
          <li>Contact us through our website</li>
          <li>Leave comments or reviews</li>
          <li>Visit our website (via cookies and analytics)</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Send you newsletters and promotional content (with your consent)</li>
          <li>Respond to your inquiries and provide customer support</li>
          <li>Improve our website and services</li>
          <li>Analyze website traffic and user behavior</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>3. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar tracking technologies to collect information about your browsing
          activities on our website. You can control cookies through your browser settings.
        </p>

        <h2>4. Third-Party Services</h2>
        <p>We use third-party services including:</p>
        <ul>
          <li>Google Analytics for website analytics</li>
          <li>Mailchimp for email marketing</li>
          <li>Affiliate networks for tracking referrals</li>
        </ul>

        <h2>5. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal data
          against unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Opt-out of marketing communications</li>
          <li>Withdraw consent at any time</li>
        </ul>

        <h2>7. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at{" "}
          <a href="mailto:privacy@brokiepedia.com">privacy@brokiepedia.com</a>
        </p>
      </div>
    </div>
  );
}
