import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://michaelayomide.com"),
  title: "Michael Ayomide - Product Designer",
  description:
    "Product designer specializing in UX, UI, design systems, and high-conversion web - available for remote work.",
  openGraph: {
    title: "Michael Ayomide - Product Designer",
    description:
      "Product designer specializing in UX, UI, design systems, and high-conversion web - available for remote work.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Ayomide - Product Designer",
    description:
      "Product designer specializing in UX, UI, design systems, and high-conversion web - available for remote work.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-bg-base">
      <body
        className={`${syne.variable} ${inter.variable} bg-bg-base font-body text-text-primary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
