import React from "react";
import Head from "next/head";
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href=" " />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
