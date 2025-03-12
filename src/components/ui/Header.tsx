"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/theme-button";
// import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary">
          URL Shortener
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          {/* <Link href="/features" className="text-primary hover:underline">
            Features
          </Link>
          <Link href="/pricing" className="text-primary hover:underline">
            Pricing
          </Link>
          <Link href="/about" className="text-primary hover:underline">
            About
          </Link>
          <Link href="/contact" className="text-primary hover:underline">
            Contact
          </Link> */}
          <ModeToggle />

          {/* Uncomment if using authentication */}
          {/* {isSignedIn ? (
            <Link href="/dashboard">
              <Button variant="outline">Dashboard</Button>
            </Link>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/sign-in">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link href="/sign-up">
                <Button>Sign Up</Button>
              </Link>
            </div>
          )} */}
        </nav>
      </div>
    </header>
  );
}
