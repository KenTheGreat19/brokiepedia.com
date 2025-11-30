"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface NewsletterFormProps {
  className?: string;
}

/**
 * NewsletterForm Component
 * Email signup form for newsletter
 * Can be integrated with Mailchimp, ConvertKit, etc.
 */
export function NewsletterForm({ className }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");

    // TODO: Integrate with actual newsletter service (Mailchimp, ConvertKit, etc.)
    // For now, simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setStatus("success");
      setMessage("Thanks for subscribing! Check your inbox for confirmation.");
      setEmail("");
      
      // Reset after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={cn("w-full max-w-md mx-auto", className)}>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent"
              disabled={status === "loading"}
              aria-label="Email address"
            />
          </div>
          <Button
            type="submit"
            disabled={status === "loading"}
            className="px-6"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Subscribing...
              </>
            ) : (
              "Subscribe"
            )}
          </Button>
        </div>

        {/* Status Message */}
        {message && (
          <p
            className={cn(
              "text-sm text-center",
              status === "success" && "text-green-600 dark:text-green-400",
              status === "error" && "text-red-600 dark:text-red-400"
            )}
          >
            {message}
          </p>
        )}
      </form>

      <p className="text-xs text-muted-foreground text-center mt-3">
        Get the best bonuses and promotions delivered weekly. No spam, unsubscribe anytime.
      </p>
    </div>
  );
}
