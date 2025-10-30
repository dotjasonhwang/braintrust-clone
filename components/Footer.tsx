"use client";

import Link from "next/link";
import { showNotImplemented } from "@/lib/toast-utils";

/**
 * Footer component
 * Displays branding and navigation links at the bottom of the page
 */

export function Footer() {
  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "Docs", href: "/docs" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Request a demo", href: "/demo" },
    { label: "Discord", href: "/discord" },
    { label: "Changelog", href: "/changelog" },
    { label: "Status", href: "/status" },
    { label: "Trust center", href: "/trust" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ];

  return (
    <footer className="py-4">
      <div className="flex items-center justify-start gap-4">
        {/* Logo */}
        <div className="text-secondary text-sm font-medium">
          djh-braintrust-clone
        </div>

        {/* Navigation links */}
        <nav className="flex items-center gap-4">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={showNotImplemented}
              className="text-xs text-placeholder hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
