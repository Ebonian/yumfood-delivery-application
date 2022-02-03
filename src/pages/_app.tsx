import "../styles/globals.css";
import type { AppProps } from "next/app";
import LaunchContext from "../contexts/LaunchContext";
import MapContext from "../contexts/MapContext";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <title>Yumfood</title>
      </Head>
      <MapContext>
        <LaunchContext>
          <Component {...pageProps} />
        </LaunchContext>
      </MapContext>
    </>
  );
}

export default MyApp;
