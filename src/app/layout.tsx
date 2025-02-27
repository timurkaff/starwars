import type { Metadata } from "next";
import StarsBackground from '@/components/StarsBackground';

import "./globals.css";

export const metadata: Metadata = {
  title: "Star Wars",
  description: "Test"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StarsBackground />
        {children}
      </body>
    </html>
  );
}
