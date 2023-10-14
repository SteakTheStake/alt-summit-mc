import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://summitmc.xyz"),
  title: "SummitMC",
  description: "Minecraft At Its Peak",
  openGraph: {
    images: "https://i.imgur.com/mUyE7Mw.png",
  },
  twitter: {
    card: "summary",
    images: "https://i.imgur.com/mUyE7Mw.png",
  },
  themeColor: "#4874c6",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
