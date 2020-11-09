import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Flashcards.css";
import Layout from "../components/layout";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Blog App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
      <Component {...pageProps} />
    </>
  );
}
