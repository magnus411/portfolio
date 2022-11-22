import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "./../components/GoogleAnalytics";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      {process.env.NODE_ENV === "production" && <GoogleAnalytics />}
    </>
  );
}

export default MyApp;
