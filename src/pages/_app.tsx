import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { useAuthStore } from "@/features/auth";
import CartPanel from "@/features/cart";
import SearchPanel from "@/features/search";
import "@/styles/globals.css";
import apiRequest from "@/utils/axios/axiosInstance";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import Head from "next/head";
import { useEffect } from "react";
import { Slide, ToastContainer } from "react-toastify";

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
    <>
      <Head>
        <meta
          name="description"
          content="A modern, full-stack coffee shop web application."
        />
      </Head>

      <main
        className={`${roboto.className} grid min-h-svh grid-rows-[auto_1fr_auto]`}
      >
        <Header />

        <div className="min-w-0">
          <Component {...pageProps} />
        </div>

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
    </>
  );
}
