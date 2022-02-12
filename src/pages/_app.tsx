import "../styles/globals.css";
import type { AppProps } from "next/app";
import LaunchContext from "../contexts/LaunchContext";
import MapContext from "../contexts/MapContext";
import Head from "next/head";
import OrderContext from "../contexts/OrderContext";
import JobContext from "../contexts/JobContext";
import SidebarContext from "../contexts/SidebarContext";

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
      <JobContext>
        <SidebarContext>
          <MapContext>
            <LaunchContext>
              <OrderContext>
                <Component {...pageProps} />
              </OrderContext>
            </LaunchContext>
          </MapContext>
        </SidebarContext>
      </JobContext>
    </>
  );
}

export default MyApp;
