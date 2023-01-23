import { AppProps } from "next/app";
import Head from "next/head";
import "../src/less/antd.less";
import "../src/scss/index.scss";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta
        // httpEquiv="Content-Security-Policy"
        // content="upgrade-insecure-requests"
      />
      <title>Sigue Tu Compra</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
