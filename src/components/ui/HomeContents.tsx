"use client";

import AirDropForm from "./AirDropForm";
import Main from "./Main";
import { useAccount } from "wagmi"

export default function HomeContents() {
  const {isConnected }= useAccount(); 
  return (
    <Main>
      {!isConnected ? (
             <div className="flex items-center justify-center">
                    <h2 className="text-xl font-medium text-zinc-600">
                        Please connect a wallet...
                    </h2>
                </div>
      ) : 
      <AirDropForm />}
    </Main>
  );
}
