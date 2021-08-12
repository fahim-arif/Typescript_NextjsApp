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
        <link 
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
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
