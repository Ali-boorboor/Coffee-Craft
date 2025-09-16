import "@/styles/globals.css";
import gsap from "gsap";
import CartPanel from "@/features/cart";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import SearchPanel from "@/features/search";
import ScrollTrigger from "gsap/ScrollTrigger";
import apiRequest from "@/utils/axios/axiosInstance";
import { ToastContainer, Slide } from "react-toastify";
import { useAuthStore } from "@/features/auth";
import { useEffect } from "react";
import type { AppProps } from "next/app";

gsap.registerPlugin(ScrollTrigger);

export default function App({ Component, pageProps }: AppProps) {
  const { setIsUserLogin } = useAuthStore();

  useEffect(() => {
    apiRequest.get("/auth", { skipErrorHandler: true }).then((response) => {
      if (response.status === 200) {
        setIsUserLogin(true);
      } else {
        setIsUserLogin(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />

      <Component {...pageProps} />

      <SearchPanel />

      <CartPanel />

      <ToastContainer
        pauseOnFocusLoss={false}
        position="top-right"
        transition={Slide}
        autoClose={3000}
        theme="colored"
        draggable
      />

      <Footer />
    </>
  );
}
