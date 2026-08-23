import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Technical Portfolio | Systems & Automation",
  description:
    "An anonymized technical résumé covering automation, integrations, enterprise applications, SharePoint, web development, governance, accessibility, and infrastructure support.",
  openGraph: {
    title: "Technical Portfolio | Systems & Automation",
    description:
      "Automation, systems integration, enterprise applications, and platform operations.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Technical Portfolio | Systems & Automation",
    description:
      "Automation, systems integration, enterprise applications, and platform operations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
