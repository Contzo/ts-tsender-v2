"use client";

import { useState, useEffect, type ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import config from "@/rainbowKitConfig";


export  function Providers({ children }) {
    const [queryClient] = useState(() => new QueryClient())
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if(!mounted) return false 
    return (
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            {children}
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    );
  }

