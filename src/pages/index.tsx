import Head from "next/head";
import Image from "next/image";
import logo from "@public/logo.png";
import Footer from "@common/components/elements/Footer";

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>twomatches</title>
        <meta name="description" content="twomatches next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center items-center pt-8">
        <div className="relative w-28 h-28">
          <Image src={logo} alt="twoMatches logo" layout="fill" />
        </div>
        <p className="pt-4 text-4xl" style={{ fontFamily: "Montserrat, sans-serif" }}><span className="font-semibold">two</span>matches</p>
      </main>

      <Footer />
    </div>
  );
}
