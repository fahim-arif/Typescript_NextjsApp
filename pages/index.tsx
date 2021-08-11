import Head from "next/head";
import Image from "next/image";
import logo from "../public/logo.png";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>twoMatches</title>
        <meta name="description" content="twoMatches next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>

      <main className="flex justify-center pt-8">
        <div className="relative w-64 h-32">
          <Image src={logo} alt="twoMatches logo" layout="fill" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
