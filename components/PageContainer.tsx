import { Footer } from "./Footer";

/**
 * Page container component
 * Wraps page content with a footer at the bottom
 */

interface PageContainerProps {
  children: React.ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
