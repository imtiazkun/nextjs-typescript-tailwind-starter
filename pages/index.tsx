import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Nextjs with Tailwind in TypeScript</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-screen h-screen bg-black flex justify-center items-center">
        <div className="text-center text-white">
          <p className="opacity-75 text-2xl">@imtiazkun</p>
          <h1 className="text-5xl font-sans">
            Nextjs with Tailwind in TypeScript
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
