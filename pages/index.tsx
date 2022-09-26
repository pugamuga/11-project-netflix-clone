import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Header from "../components/Header";

const Home: NextPage = (): JSX.Element => {
  return (
    <div className="h-screen w-full">
      <Head>
        <title>Pugaflix-home</title>

        <link rel="icon" href="..//favicon.ico" />
      </Head>
      <Header/>
      <main>
        <section></section>
      </main>
    </div>
  );
};

export default Home;
