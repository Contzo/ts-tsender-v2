"use client";
import dynamic from "next/dynamic";

const HomeContent = dynamic(() => import("@/components/ui/HomeContents"), {
  ssr: false,
});
export default function Home() {
  return <HomeContent />;
}
