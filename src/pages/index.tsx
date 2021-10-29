import Head from "next/head";

import Navbar from "@root/common/components/elements/Navbar";
import LogoHeader from "@root/common/components/elements/LogoHeader";
import Footer from "@common/components/elements/Footer";
import Logo from "@common/components/elements/Logo/Logo";

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
