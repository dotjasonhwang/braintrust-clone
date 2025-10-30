import { Footer } from "./Footer";

/**
 * Page layout wrapper component
 * Wraps page content with a footer at the bottom
 */

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto">{children}</div>
      <Footer />
    </div>
  );
}
