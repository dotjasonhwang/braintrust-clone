import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { ProjectHeader } from "@/components/ProjectHeader";
import { Toaster } from "@/components/ui/sonner";
import projectData from "@/data/logs.json";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Braintrust Clone - Project Overview",
  description: "Educational clone of Braintrust AI model evaluation platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen bg-background">
          {/* Sidebar */}
          <Sidebar />

          {/* Main content area */}
          <div className="flex-1 flex flex-col">
            {/* Project header */}
            <ProjectHeader project={projectData.project} />

            {/* Page content */}
            <div className="flex-1 bg-background border-t border-l rounded-tl-md border-border-subtle">
              <main className="m-3 h-full">{children}</main>
            </div>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
