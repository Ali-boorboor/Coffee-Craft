import "@/styles/globals.css";
import gsap from "gsap";
import Header from "@/components/ui/header/components/Header";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { AppProps } from "next/app";

gsap.registerPlugin(ScrollTrigger);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
