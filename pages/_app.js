/* eslint-disable @next/next/no-css-tags */
/* eslint-disable react/no-unknown-property */
import Head from "next/head";
import Script from "next/script";
import "mapbox-gl/dist/mapbox-gl.css";

import "../styles/globals.css";
import Layout from "../components/layout/layout";
// import "react-quill/dist/quill.snow.css";
// this is okay
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
       
      </Head>
      <Component {...pageProps} />

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
    </Layout>
  );
}

export default MyApp;
