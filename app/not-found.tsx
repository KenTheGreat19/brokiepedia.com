import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-9xl font-bold text-brand-400">404</h1>
        <h2 className="text-3xl font-bold">Page Not Found</h2>
        <p className="text-lg text-muted-foreground">
          Don't get brokie looking for pages that don't exist!
          <br />
          The page you're looking for might have been moved or doesn't exist.
        </p>
        <Button asChild size="lg">
          <Link href="/">
            <Home className="w-5 h-5 mr-2" />
            Back to Homepage
          </Link>
        </Button>
      </div>
    </div>
  );
}
