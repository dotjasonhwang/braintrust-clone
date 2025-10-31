import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { ProjectHeader } from "@/components/ProjectHeader";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen md:h-screen bg-background md:overflow-hidden">
            {/* Sidebar - hidden from layout on mobile, participates in flex on desktop */}
            <div className="w-0 md:w-auto">
              <Sidebar />
            </div>

            {/* Main content area */}
            <div className="flex-1 flex flex-col min-w-0">
              {/* Project header */}
              <ProjectHeader project={projectData.project} />

              {/* Page content */}
              <div className="flex-1 bg-background border-t md:border-l md:rounded-tl-md border-border-subtle overflow-x-hidden">
                <main className="m-3 h-full">{children}</main>
              </div>
            </div>
          </div>
          <Toaster position="bottom-center" offset="120px" />
        </ThemeProvider>
      </body>
    </html>
  );
}
