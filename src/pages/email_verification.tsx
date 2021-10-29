import Head from "next/head";
import Navbar from "@root/common/components/elements/Navbar";

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>twomatches</title>
        <meta name="description" content="twomatches next app" />
      </Head>

      <Navbar />

      <main className="flex flex-col justify-center items-center pt-8">
        <p className="text-xl">
          Your account has been created successfully. Please verify your email
          and login.
        </p>
      </main>
    </div>
  );
}
