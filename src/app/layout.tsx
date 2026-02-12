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
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WB9CJP5N45"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WB9CJP5N45');
            `,
          }}
        />
      </head>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
