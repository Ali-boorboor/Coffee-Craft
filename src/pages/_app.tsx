import "@/styles/globals.css";
import CartPanel from "@/features/cart";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import SearchPanel from "@/features/search";
import apiRequest from "@/utils/axios/axiosInstance";
import { ToastContainer, Slide } from "react-toastify";
import { useAuthStore } from "@/features/auth";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { useEffect } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  const { setIsUserLogin } = useAuthStore();

  useEffect(() => {
    import("gsap").then((gsapModule) => {
      import("gsap/ScrollTrigger").then((ScrollTrigger) => {
        gsapModule.default.registerPlugin(ScrollTrigger.default);
      });
    });

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
    <main className={roboto.className}>
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
    </main>
  );
}
