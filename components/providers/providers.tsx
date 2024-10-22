"use client";

import { SessionProvider } from "next-auth/react";
import * as React from "react";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { Chain, configureChains, createConfig, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { mainnet, sepolia, goerli, polygonMumbai } from "wagmi/chains";
import { Network } from "alchemy-sdk";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface Chains {
  [key: string]: Network;
}

export const Chains: Chains = {
  [mainnet.name]: Network.ETH_MAINNET,
  [sepolia.name]: Network.ETH_SEPOLIA,
  [goerli.name]: Network.ETH_GOERLI,
  [polygonMumbai.name]: Network.MATIC_MUMBAI,
};

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, sepolia, goerli, polygonMumbai],
  [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY! })]
);

const { connectors } = getDefaultWallets({
  appName: "Fireflies",
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!,
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: false,
  connectors,
  publicClient,
  webSocketPublicClient,
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
        </WagmiConfig>
      </QueryClientProvider>
    </SessionProvider>
  );
}
