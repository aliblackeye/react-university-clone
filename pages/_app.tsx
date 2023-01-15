// Next
import type { AppProps } from "next/app";

// Components
import Layout from "../components/layout/Layout";

// Styles
import "../styles/globals.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/footer-corporation-slider.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
