import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Header from "../components/Header";

const Home: NextPage = (): JSX.Element => {
  return (
    <div className=" relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511]">
      <Head>
        <title>Pugaflix-home</title>

        <link rel="icon" href="..//favicon.ico" />
      </Head>
      <Header/>
      <main>
        <section className=""></section>
      </main>
    </div>
  );
};

export default Home;
