import Head from "next/head";

import Navbar from "@common/components/elements/Navbar";
import Logo from "@common/components/elements/Logo/Logo";
import Footer from "@common/components/elements/Footer";

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>twoMatches</title>
        <meta name="description" content="TwoMatches Next App" />
      </Head>

      <Navbar />

      <Logo justify="center" marginTop="10" />

      <Footer />
    </div>
  );
}
