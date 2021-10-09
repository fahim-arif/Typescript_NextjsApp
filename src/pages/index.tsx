import Head from "next/head";

import Navbar from "@root/common/components/elements/Navbar";
import LogoHeader from "@root/common/components/elements/LogoHeader";
import Footer from "@common/components/elements/Footer";

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>TwoMatches</title>
        <meta name="description" content="TwoMatches Next App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <LogoHeader />

      <Footer />
    </div>
  );
}
