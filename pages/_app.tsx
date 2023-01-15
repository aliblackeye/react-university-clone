// Next
import type { AppProps } from "next/app";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";

// Components
import Layout from "../components/layout/Layout";

// Styles
import "../styles/globals.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
