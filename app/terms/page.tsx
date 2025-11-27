import React from "react";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms of Service - Brokiepedia",
  description: "Brokiepedia's terms of service and user agreement.",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Terms of Service" }]} />

      <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
        <h1>Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: November 28, 2025</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using Brokiepedia.com ("the Website"), you accept and agree to be bound by
          these Terms of Service. If you do not agree to these terms, please do not use the Website.
        </p>

        <h2>2. Use of the Website</h2>
        <p>You agree to use the Website only for lawful purposes. You must not:</p>
        <ul>
          <li>Use the Website in any way that violates applicable laws or regulations</li>
          <li>Attempt to gain unauthorized access to the Website or its systems</li>
          <li>Upload viruses, malware, or any other malicious code</li>
          <li>Engage in any activity that disrupts or interferes with the Website</li>
        </ul>

        <h2 id="disclaimer">3. Disclaimer of Warranties</h2>
        <p>
          <strong>THE WEBSITE AND ALL CONTENT ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND.</strong>
        </p>
        <p>
          Brokiepedia provides reviews and information for educational purposes only. We do not provide
          financial advice. Trading and gambling involve significant risks, and you could lose all of
          your invested capital.
        </p>

        <h2>4. Affiliate Disclosure</h2>
        <p>
          Brokiepedia participates in affiliate programs and may earn commissions when you click on
          links to brokers, casinos, or trading platforms and sign up. This does not affect the price
          you pay and helps us maintain the Website free of charge.
        </p>
        <p>
          Our reviews remain independent and unbiased regardless of affiliate relationships.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          TO THE FULLEST EXTENT PERMITTED BY LAW, BROKIEPEDIA SHALL NOT BE LIABLE FOR ANY DIRECT,
          INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF
          THE WEBSITE OR ANY THIRD-PARTY SERVICES.
        </p>

        <h2>6. User-Generated Content</h2>
        <p>
          By submitting reviews, comments, or other content to the Website, you grant Brokiepedia a
          worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such
          content.
        </p>

        <h2>7. Age Restriction</h2>
        <p>
          You must be at least 18 years old to use this Website. By using the Website, you represent
          that you are of legal age in your jurisdiction.
        </p>

        <h2>8. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms of Service at any time. Continued use of the
          Website after changes constitutes acceptance of the modified terms.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the jurisdiction
          in which Brokiepedia operates, without regard to its conflict of law provisions.
        </p>

        <h2>10. Contact</h2>
        <p>
          For questions about these Terms of Service, contact us at{" "}
          <a href="mailto:legal@brokiepedia.com">legal@brokiepedia.com</a>
        </p>
      </div>
    </div>
  );
}
