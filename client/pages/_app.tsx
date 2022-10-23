import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppProvider from "../context/AppContext/AppContext";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
