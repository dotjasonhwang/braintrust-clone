"use client";

import Link from "next/link";
import { showNotImplemented } from "@/lib/toast-utils";

/**
 * Footer component
 * Displays branding and navigation links at the bottom of the page
 */

export function Footer() {
  const footerLinks = [
    { label: "Home", href: { undefined } },
    { label: "Docs", href: { undefined } },
    { label: "Pricing", href: { undefined } },
    { label: "Blog", href: { undefined } },
    { label: "Request a demo", href: { undefined } },
    { label: "Discord", href: { undefined } },
    { label: "Changelog", href: { undefined } },
    { label: "Status", href: { undefined } },
    { label: "Trust center", href: { undefined } },
    { label: "Privacy", href: { undefined } },
    { label: "Terms", href: { undefined } },
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
