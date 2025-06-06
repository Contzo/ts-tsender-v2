import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/Header";
import { Providers } from "./Providers";

export const metadata: Metadata = {
  title: "TsSender",
  description: "My own clone of TSender",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
