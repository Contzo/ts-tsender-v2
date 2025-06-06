import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/Header";
import { Providers } from "./Providers";
import { Toaster } from "react-hot-toast";

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
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
