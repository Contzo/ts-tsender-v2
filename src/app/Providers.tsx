// "use client";
// import { useState, useEffect, type ReactNode } from "react";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { WagmiProvider, type Config } from "wagmi";
// import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
// import "@rainbow-me/rainbowkit/styles.css";

// interface ProvidersProps {
//   children: ReactNode;
// }

// export function Providers({ children }: ProvidersProps) {
//   const [queryClient] = useState(() => new QueryClient());
//   const [config, setConfig] = useState<Config | null>(null);

//   useEffect(() => {
//     import("@/rainbowKitConfig").then((configModule) => {
//       setConfig(configModule.default);
//     });
//   }, []);

//   // Wait for both mounting and config to be loaded
//   if (!config) {
//     return (
//       <div style={{ 
//         display: 'flex', 
//         justifyContent: 'center', 
//         alignItems: 'center', 
//         height: '100vh' 
//       }}>
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <WagmiProvider config={config}>
//       <QueryClientProvider client={queryClient}>
//         <RainbowKitProvider>
//           {children}
//         </RainbowKitProvider>
//       </QueryClientProvider>
//     </WagmiProvider>
//   );
// }

"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { type ReactNode, useState, useEffect } from "react"
import { WagmiProvider } from "wagmi"
import { lightTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import config from "@/rainbowKitConfig"
import "@rainbow-me/rainbowkit/styles.css"

export function Providers(props: { children: ReactNode }) {
    const [queryClient] = useState(() => new QueryClient())

    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider theme={lightTheme({ borderRadius: "medium" })}>
                    {props.children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}