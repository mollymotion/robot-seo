import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Robot SEO",
  description: "Making websites maximally legible to AI systems while maintaining traditional SEO excellence",
  keywords: "Robot SEO, AI optimization, technical SEO, service businesses, AI systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
