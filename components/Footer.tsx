"use client";

import { showNotImplemented } from "@/lib/toast-utils";

/**
 * Footer component
 * Displays branding and navigation links at the bottom of the page
 */

export function Footer() {
  const footerLinks = [
    "Home",
    "Docs",
    "Pricing",
    "Blog",
    "Request a demo",
    "Discord",
    "Changelog",
    "Status",
    "Trust center",
    "Privacy",
    "Terms",
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
          {footerLinks.map((label) => (
            <button
              key={label}
              onClick={showNotImplemented}
              className="text-xs text-placeholder hover:text-foreground transition-colors"
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </footer>
  );
}
